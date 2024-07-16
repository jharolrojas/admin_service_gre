import { DataBase } from '../../../../database';
import { ClientAttributes } from '../../models/client.model';
import { momentCustom } from '../../../../utils/moment';

export const createClientService = async ({
  // name_p,
  // name_s,
  // lastname_m,
  // lastname_p,
  // number_document,
  // type_document_id,
  // email,
  gender_id,
  number_phone_1,
  // number_phone_2,
  address,
  // birthdate,
  full_lastname,
  full_name
}: ClientAttributes) => {
  try {
    console.log("servicio");
    

    const newClient = await DataBase.instance.client.create({
    // name_p,
    // name_s,
    // lastname_m,
    // lastname_p,
    // number_document,
    // type_document_id,
    // email,
    gender_id,
    number_phone_1,
    // number_phone_2,
    address,
    // birthdate,
    full_lastname,
    full_name,
    created_date:momentCustom,
    });
    return newClient;
  } catch (err) {
    throw err;
  }
};
