import { WhereOptions } from 'sequelize';
import { DataBase } from '../../../../database';
import { TicketAttributes } from '../../models/ticket.model';
import { momentCustom } from '../../../../utils/moment';

export const toggleTicketStatusService = async ({
  where,
  payload,
}: {
  where: WhereOptions<TicketAttributes>;
  payload: { status: boolean; updated_by: number };
}) => {
  try {
    return await DataBase.instance.ticket.update(
      {
        ...payload,
        updated_date:momentCustom,
      },
      {
        where,
      }
    );
  } catch (err) {
    throw err;
  }
};
