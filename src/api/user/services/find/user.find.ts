import { QueryTypes, WhereOptions } from 'sequelize'
import { DataBase } from '../../../../database/index'

export const findUserWhereService = async ({
  where
}: {
  where: WhereOptions<any>
}) => {
  try {
    return await DataBase.instance.user.findOne({
      where,
    })
  } catch (err) {
    throw err
  }
}



export const getUserService = async ({
  page,
  limit,
  order,
  search,
  rol
}: {
  page: number;
  limit: number;
  order: string;
  search: string;
  rol: number;
}) => {
  try {
    const offset = (page - 1) * limit;
    const searchPattern = `%${search}%`;

    let whereClause = 'WHERE 1=1';
    const replacements: any = {
      limit,
      offset
    };

    if (rol > 0) {
      whereClause += ' AND u.rol_id = :rol';
      replacements.rol = rol;
    }

    if (search && search.trim() !== '') {
      whereClause += `
        AND (
          u.name_p LIKE :search OR 
          u.name_s LIKE :search OR 
          u.lastname_m LIKE :search OR 
          u.lastname_p LIKE :search OR 
          u.number_document LIKE :search OR 
          u.email LIKE :search OR 
          u.number_phone_1 LIKE :search OR 
          u.number_phone_2 LIKE :search OR 
          u.address LIKE :search OR
          level.value LIKE :search
        )`;
      replacements.search = searchPattern;
    }

    const dataQuery = `
      SELECT 
        u.id, 
        u.name_p, 
        u.name_s, 
        u.lastname_m, 
        u.lastname_p, 
        u.number_document, 
        u.email, 
        u.number_phone_1, 
        u.number_phone_2, 
        u.address, 
        u.salary, 
        u.level_id, 
        level.value as level,
        rol.value as rol,
        type_document.value as type_document, 
        gender.value as gender
      FROM user AS u
      INNER JOIN general_variables AS rol ON u.rol_id = rol.id_code
      INNER JOIN general_variables AS type_document ON u.type_document_id = type_document.id_code
      INNER JOIN general_variables AS gender ON u.gender_id = gender.id_code
      INNER JOIN general_variables as level ON u.level_id = level.id_code
      ${whereClause}
      ORDER BY u.created_date ${order}
      LIMIT :limit OFFSET :offset;
    `;

    const countQuery = `
      SELECT COUNT(*) as total
      FROM user AS u
      INNER JOIN general_variables AS rol ON u.rol_id = rol.id_code
      INNER JOIN general_variables AS type_document ON u.type_document_id = type_document.id_code
      INNER JOIN general_variables AS gender ON u.gender_id = gender.id_code
      INNER JOIN general_variables as level ON u.level_id = level.id_code

      ${whereClause};
    `;

    const results = await DataBase.instance.sequelize.query(dataQuery, {
      replacements,
      type: QueryTypes.SELECT,
      logging:console.log
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


