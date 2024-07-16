import { DataBase } from '../../../../database';
import { momentCustom } from '../../../../utils/moment';
import { UpdateExpensePayload } from '../../interfaz/expense.interfaz';

export const updateExpenseService = async ({
  where,
  payload
}: UpdateExpensePayload): Promise<any> => {
  try {
    return await DataBase.instance.expense.update(
      {
        ...payload,
        updated_date: momentCustom
      },
      {
        where
      }
    );
  } catch (err) {
    throw err;
  }
};
