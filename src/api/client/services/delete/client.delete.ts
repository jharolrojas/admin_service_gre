import { WhereOptions } from "sequelize"
import { DataBase } from "../../../../database"
import { ClientAttributes } from "../../models/client.model"
import { momentCustom } from "../../../../utils/moment"

export const toggleClientStatusService = async ({
    where,
    payload
  }: {
    where: WhereOptions<ClientAttributes>
    payload:{status:boolean,updated_by:number}
  }) => {
    try {
      return await DataBase.instance.client.update({
        ...payload,
          updated_date:momentCustom,
      },{
        where,
      })
    } catch (err) {
      throw err
    }
  }
  