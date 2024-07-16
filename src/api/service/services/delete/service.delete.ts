import moment from "moment";
import { WhereOptions } from "sequelize";
import { DataBase } from "../../../../database";
import { ServiceAttributes } from "../../models/service.model";
import { momentCustom } from "../../../../utils/moment";

export const toggleServiceStatusService = async ({
  where,
  payload
}: {
  where: WhereOptions<ServiceAttributes>,
  payload: { status: boolean, updated_by: number }
}) => {
  try {
    return await DataBase.instance.service.update({
      ...payload,
      updated_date: momentCustom,
    }, {
      where,
    });
  } catch (err) {
    throw err;
  }
};
