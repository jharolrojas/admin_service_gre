import { DataBase } from '../../../../database';
import { ServiceAttributes } from '../../models/service.model';
import { momentCustom } from '../../../../utils/moment';

export const createService = async ({
  name,
  level_id,
  description,
}: ServiceAttributes) => {
  try {
    const newService = await DataBase.instance.service.create({
      name,
      level_id,
      description,
      created_date: momentCustom,
    });
    return newService;
  } catch (err) {
    throw err;
  }
};
