import { WhereOptions } from 'sequelize'
import { DataBase } from '../../../../database'
import { SedeAttributes } from '../../models/sede.model'

export const sedeById = async (id: number): Promise<SedeAttributes> => {
  try {
    return (
      await DataBase.instance.sede.findOne({
        where: {
          id,
         
        },
        attributes: { exclude: ['created_by', 'updated_by', 'updated_date'] },
      })
    )?.get({ plain: true })!
  } catch (err) {
    throw err
  }
}
// export const sedeByCompany = async ({ where }: { where: WhereOptions<SedeAttributes> }): Promise<any> => {
//   try {
//     const sedes = await DataBase.instance.sede.findAll({
//       where,
//       attributes: { exclude: ['created_by', 'updated_by', 'updated_date'] },
//     })
//     return sedes
//   } catch (err) {
//     throw err
//   }
// }
export const sedes= async ({ where }: { where: WhereOptions<SedeAttributes> }): Promise<any> => {
  try {
    const sedes = await DataBase.instance.sede.findAll({
      where,
      attributes: ['name','id'] ,
    })
    return sedes
  } catch (err) {
    throw err
  }
}