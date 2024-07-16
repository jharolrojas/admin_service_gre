import { QueryTypes, WhereOptions } from 'sequelize'
import { DataBase } from '../../../../database/index'

export const findClientByIdService = async ({
  where
}: {
  where: WhereOptions<any>
}) => {
  try {
    return await DataBase.instance.client.findOne({
      where,
    })
  } catch (err) {
    throw err
  }
}

export const getClientService = async ({
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
        --  c.name_p LIKE :search OR 
        --   c.name_s LIKE :search OR 
        --   c.lastname_m LIKE :search OR 
        --   c.lastname_p LIKE :search OR 
        --   c.number_document LIKE :search OR 
        --   c.email LIKE :search OR 
             c.number_phone_1 LIKE :search OR 
         --  c.number_phone_2 LIKE :search OR 
          c.address LIKE :search
          c.full_name LIKE :search
          c.full_lastname LIKE :search
        )`;
      replacements.search = searchPattern;
    }

    const dataQuery = `
      SELECT 
        c.id, 
      --  c.name_p, 
      --  c.name_s, 
      --  c.lastname_m, 
      --  c.lastname_p, 
      --  c.number_document, 
      --  c.email, 
        c.number_phone_1, 
      --  c.number_phone_2, 
        c.address, 
      --  type_document.value as type_document, 
        gender.value as gender,
        c.full_name,
        c.full_lastname
      FROM client AS c
      -- INNER JOIN general_variables AS type_document ON c.type_document_id = type_document.id_code
      INNER JOIN general_variables AS gender ON c.gender_id = gender.id_code
      ${whereClause}
      ORDER BY c.created_date ${order}
      LIMIT :limit OFFSET :offset;
    `;

    const countQuery = `
      SELECT COUNT(*) as total
      FROM client AS c
     -- INNER JOIN general_variables AS type_document ON c.type_document_id = type_document.id_code
      INNER JOIN general_variables AS gender ON c.gender_id = gender.id_code
      ${whereClause};
    `;

    const results = await DataBase.instance.sequelize.query(dataQuery, {
      replacements,
      type: QueryTypes.SELECT
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
    console.log(err);
    
    throw err;
  }
};


