import { DataBase } from '../../../../database';
import { momentCustom } from '../../../../utils/moment';
import { UpdateTicketPayload } from '../../interfaz/ticket.interfaz'; // Asumiendo que se usa la interfaz correcta para el payload

export const updateTicketService = async ({
  where, payload
}: UpdateTicketPayload): Promise<any> => {
  try {
    return await DataBase.instance.ticket.update(
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
