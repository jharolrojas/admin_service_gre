import { DataBase } from '../../../../database';
import { TicketAttributes } from '../../models/ticket.model';
import { momentCustom } from '../../../../utils/moment';

export const createTicketService = async ({
  client_id,
  service_id,
  technical_id,
  hour,
  date,
  how_long,
  service_status_id,
  amount,
  status_payment_id,
  type_payment_id,
  status,
  created_by,
  description
}: TicketAttributes | any) => {
  try {
    const newTicket = await DataBase.instance.ticket.create({
      client_id,
      service_id: service_id?.join(","),
      technical_id,
      hour,
      date,
      how_long,
      service_status_id,
      amount,
      status_payment_id,
      type_payment_id,
      status,
      created_date: momentCustom,
      created_by,
      description
    });
    return newTicket;
  } catch (err) {
    throw err;
  }
};
