import { WhereOptions } from 'sequelize';
import { ExpenseAttributes } from '../models/expense.models';

export interface UpdateExpensePayload {
  where: WhereOptions<any>;
  payload: Partial<ExpenseAttributes>;
}
