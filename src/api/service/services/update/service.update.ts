import { DataBase } from '../../../../database';
import { momentCustom } from '../../../../utils/moment';
import { UpdateServicePayload } from '../../interfaz/service.interfaz';

export const updateService = async ({
  where,
  payload
}: UpdateServicePayload): Promise<any> => {
  try {
    return await DataBase.instance.service.update(
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
