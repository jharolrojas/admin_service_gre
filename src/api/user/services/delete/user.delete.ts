import moment from "moment"
import { WhereOptions } from "sequelize"
import { DataBase } from "../../../../database"
import { UserAttributes } from "../../models/user.model"
import { momentCustom } from "../../../../utils/moment"

export const disabledEnabledUser = async ({
    where,
    updated_by,
    state
  }: {
    where: WhereOptions<UserAttributes>
    updated_by?:number
    state?:boolean
  }) => {
    try {
      return await DataBase.instance.user.update({
          state,
          updated_date:momentCustom,
          updated_by
      },{
        where,
      })
    } catch (err) {
      throw err
    }
  }
  