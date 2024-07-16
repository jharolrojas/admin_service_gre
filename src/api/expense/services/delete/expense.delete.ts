import { WhereOptions } from "sequelize";
import { DataBase } from "../../../../database";
import { ExpenseAttributes } from "../../models/expense.models";
import { momentCustom } from "../../../../utils/moment";

export const toggleExpenseStatusService = async ({
  where,
  payload
}: {
  where: WhereOptions<ExpenseAttributes>;
  payload: { status: boolean; updated_by: number };
}) => {
  try {
    return await DataBase.instance.expense.update({
      ...payload,
      updated_date:momentCustom,
    }, {
      where,
    });
  } catch (err) {
    throw err;
  }
};
