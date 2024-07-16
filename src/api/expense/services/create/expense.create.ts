import { DataBase } from '../../../../database';
import { momentCustom } from '../../../../utils/moment';
import { ExpenseAttributes } from '../../models/expense.models';

export const createExpenseService = async ({
  type_coin_id,
  type_expense_id,
  type_payment_id,
  expense_for_id,
  description,
  amount,
}: ExpenseAttributes) => {
  try {
    const newExpense = await DataBase.instance.expense.create({
      type_coin_id,
      type_expense_id,
      type_payment_id,
      expense_for_id,
      description,
      amount,
      created_date: momentCustom,
    });
    return newExpense;
  } catch (err) {
    throw err;
  }
};
