import { QueryTypes, WhereOptions } from 'sequelize';
import { DataBase } from '../../../../database/index';

export const findExpenseByIdService = async ({
  where
}: {
  where: WhereOptions<any>
}) => {
  try {
    return await DataBase.instance.expense.findOne({
      where,
    });
  } catch (err) {
    throw err;
  }
};

export const getExpenseService = async ({
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
          coin.value LIKE :search OR 
          type_expense.value LIKE :search OR 
          type_payment.value  LIKE :search OR 
          expense_for.value LIKE :search OR 
          e.description LIKE :search OR 
          e.amount LIKE :search
        )`;
      replacements.search = searchPattern;
    }

    const dataQuery = `
      SELECT 
        e.id, 
        e.type_coin_id, 
        coin.value as coin,
        e.type_expense_id, 
        type_expense.value as type_expense,
        e.type_payment_id, 
        type_payment.value as type_payment,
        e.expense_for_id, 
        expense_for.value as expense_for, 
        e.description, 
        e.amount
      FROM expense AS e
        INNER JOIN general_variables as coin on (coin.id_code = e.type_coin_id)
        INNER JOIN general_variables as type_expense on  (type_expense.id_code = e.type_expense_id)
        INNER JOIN general_variables as type_payment on (type_payment.id_code = e.type_payment_id)
        INNER JOIN general_variables as expense_for on (expense_for.id_code = e.expense_for_id)
      ${whereClause}
      ORDER BY  e.created_date ${order}
      LIMIT :limit OFFSET :offset;
    `;

    const countQuery = `
      SELECT COUNT(*) as total
      FROM expense AS e
        INNER JOIN general_variables as coin on (coin.id_code = e.type_coin_id)
        INNER JOIN general_variables as type_expense on  (type_expense.id_code = e.type_expense_id)
        INNER JOIN general_variables as type_payment on (type_payment.id_code = e.type_payment_id)
        INNER JOIN general_variables as expense_for on (expense_for.id_code = e.expense_for_id)
      
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
    throw err;
  }
};
