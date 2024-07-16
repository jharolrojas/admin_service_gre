import moment from "moment"
import { WhereOptions } from "sequelize"
import { DataBase } from "../../../../database"
import { GeneralVariablesAttributes } from "../../models/general.variables.model"
import { momentCustom } from "../../../../utils/moment"

export const updateGeneralVariables = async ({
    payload,
    where,
  }: {
    payload: GeneralVariablesAttributes
    where: WhereOptions<GeneralVariablesAttributes>
  }) => {
    try {
      return await DataBase.instance.general_variables.update(
        {
          updated_date:momentCustom,
          ...payload,
        },
        {
          where,
        }
      )
    } catch (err) {
      throw err
    }
  }