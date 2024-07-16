import { QueryTypes, WhereOptions } from 'sequelize';
import { DataBase } from '../../../../database/index';
import { ServiceAttributes } from '../../models/service.model';

export const findServiceByIdService = async ({
  where
}: {
  where: WhereOptions<ServiceAttributes>
}) => {
  try {
    return await DataBase.instance.service.findOne({
      where,
    });
  } catch (err) {
    throw err;
  }
};

export const getService = async ({
  page,
  limit,
  order,
  search,
}: {
  page: number;
  limit: number;
  order: string;
  search: string;
}) => {
  try {
    const offset = (page - 1) * limit;
    const searchPattern = `%${search}%`;

    let whereClause = 'WHERE 1=1';
    const replacements: any = {
      limit,
      offset
    };

    if (search && search.trim() !== '') {
      whereClause += `
        AND (
          s.name LIKE :search OR 
          level.value LIKE :search OR 
          s.description LIKE :search
        )`;
      replacements.search = searchPattern;
    }

    const dataQuery = `
      SELECT 
        s.id, 
        s.name, 
        s.level_id, 
        level.value as level,
        s.description, 
        s.status
      FROM service AS s
        INNER JOIN general_variables as level on (level.id_code = s.level_id)
      ${whereClause}
      ORDER BY s.created_date ${order}
      LIMIT :limit OFFSET :offset;
    `;

    const countQuery = `
      SELECT COUNT(*) as total
      FROM service AS s
        INNER JOIN general_variables as level on (level.id_code = s.level_id)
      ${whereClause};
    `;

    const results = await DataBase.instance.sequelize.query(dataQuery, {
      replacements,
      type: QueryTypes.SELECT,
    });

    const countResult: any = await DataBase.instance.sequelize.query(countQuery, {
      replacements,
      type: QueryTypes.SELECT
    });

    const totalRecords = countResult[0].total;

    return {
      results,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
      currentPage: page
    };
  } catch (err) {
    throw err;
  }
};
