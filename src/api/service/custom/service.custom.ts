import { DataBase } from "../../../database"

export const existsId_code_generales_variables = async (id_code: string | any , { req }: { req: Request | any }): Promise<void> => {
    const generalVariable = await DataBase.instance.general_variables.findOne({where:{id_code}})
    if (generalVariable) throw new Error(`Ya existe el codigo ${generalVariable.id_code}`)
  }

  export const existsId = async (id: string | any , { req }: { req: Request | any }): Promise<void> => {
    const generalVariable = await DataBase.instance.general_variables.findOne({where:{id}})
    if (!generalVariable) throw new Error(`No existe id `)
  }
  export const existsIdCode = async (id_code: string | any , { req }: { req: Request | any }): Promise<void> => {
    const generalVariable = await DataBase.instance.general_variables.findOne({where:{id_code}})
    if (!generalVariable) throw new Error(`No existe id_code `)
  }