import { DataBase } from "../../../../database"
import { SedeAttributes } from "../../models/sede.model"
import { momentCustom } from "../../../../utils/moment"

export const createSedeService = async (sede:SedeAttributes) => {
    try {
      return await DataBase.instance.sede.create({
        created_date: momentCustom,
        state: true,
        ...sede,
      })
    } catch (error) {
      throw error
    }
  }