import { QueryTypes, WhereOptions } from 'sequelize';
import { DataBase } from '../../../../database/index';
import { TicketAttributes } from '../../models/ticket.model';

export const findTicketByIdService = async ({
  where
}: {
  where: WhereOptions<TicketAttributes>
}) => {
  try {
    return await DataBase.instance.ticket.findOne({
      where,
    });
  } catch (err) {
    throw err;
  }
};

export const getTicketsService = async ({
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
          t.hour LIKE :search OR 
          t.date LIKE :search OR 
          t.how_long LIKE :search OR 
          t.amount LIKE :search OR
        --  c.number_document LIKE :search OR
          u.number_document LIKE :search OR
          c.full_name LIKE :search OR
          c.full_lastname LIKE :search OR
          c.number_phone_1 LIKE :search

        )`;
      replacements.search = searchPattern;
    }

    const dataQuery = `
      SELECT 
          t.id,
          t.hour,
          t.date,
          t.how_long,
          t.amount,
          t.status,
          t.service_id,
          s.name AS service_name,
          s.description AS service_description,
          level_service.value AS level,
          t.service_status_id,
          service_status.value AS service_status,
          t.status_payment_id,
          status_payment.value AS status_payment,
          t.type_payment_id,
          type_payment.value AS type_payment,
          t.client_id,
        --  c.name_p AS client_name_p,
        --  c.name_s AS client_name_s,
        --  c.lastname_m AS client_lastname_m,
        --  c.lastname_p AS client_lastname_p,
         -- c.number_document AS client_number_document,
        --  c.email AS client_email,
          c.number_phone_1 AS client_number_phone_1,
         -- c.number_phone_2 AS client_number_phone_2,
          c.address AS client_address,
        --  type_document.value AS client_type_document,
          gender.value AS client_gender,
          t.technical_id,
          u.name_p AS technical_name_p,
          u.name_s AS technical_name_s,
          u.lastname_m AS technical_lastname_m,
          u.lastname_p AS technical_lastname_p,
          u.number_document AS technical_number_document,
          u.email AS technical_email,
          u.number_phone_1 AS technical_number_phone_1,
          u.number_phone_2 AS technical_number_phone_2,
          u.address AS technical_address,
          type_document_u.value AS technical_type_document,
          gender_u.value AS technical_gender,
          c.full_name,
          c.full_lastname

      FROM
          ticket AS t
      INNER JOIN
          client AS c ON t.client_id = c.id
     -- INNER JOIN
      --    general_variables AS type_document ON c.type_document_id = type_document.id_code
      INNER JOIN
          general_variables AS gender ON c.gender_id = gender.id_code
      INNER JOIN
          service AS s ON s.id = t.service_id
      INNER JOIN
          general_variables AS level_service ON level_service.id_code = s.level_id
      INNER JOIN
          user AS u ON u.id = t.technical_id
      INNER JOIN
          general_variables AS type_document_u ON u.type_document_id = type_document_u.id_code
      INNER JOIN
          general_variables AS gender_u ON u.gender_id = gender_u.id_code
      INNER JOIN
          general_variables AS service_status ON t.service_status_id = service_status.id_code
      INNER JOIN
          general_variables AS status_payment ON t.status_payment_id = status_payment.id_code
      INNER JOIN
          general_variables AS type_payment ON t.type_payment_id = type_payment.id_code
      ${whereClause}
      ORDER BY t.created_date ${order}
      LIMIT :limit OFFSET :offset;
      `;

    const countQuery = `
      SELECT COUNT(*) as total
      FROM ticket AS t
      INNER JOIN
          client AS c ON t.client_id = c.id
    --  INNER JOIN
     --     general_variables AS type_document ON c.type_document_id = type_document.id_code
      INNER JOIN
          general_variables AS gender ON c.gender_id = gender.id_code
      INNER JOIN
          service AS s ON s.id = t.service_id
      INNER JOIN
          general_variables AS level_service ON level_service.id_code = s.level_id
      INNER JOIN
          user AS u ON u.id = t.technical_id
      INNER JOIN
          general_variables AS type_document_u ON u.type_document_id = type_document_u.id_code
      INNER JOIN
          general_variables AS gender_u ON u.gender_id = gender_u.id_code
      INNER JOIN
          general_variables AS service_status ON t.service_status_id = service_status.id_code
      INNER JOIN
          general_variables AS status_payment ON t.status_payment_id = status_payment.id_code
      INNER JOIN
          general_variables AS type_payment ON t.type_payment_id = type_payment.id_code
      ${whereClause}
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





