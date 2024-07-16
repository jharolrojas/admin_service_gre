import { DataBase } from '../../../../database'
import { GlobalAttributes } from '../../models/global.model'

export const findOneGlobalVar = async (key: string): Promise<GlobalAttributes | null> => {
  try {
    const global = await DataBase.instance.global.findOne({
      where: { key },
      attributes: ['key', 'value'],
    })
    if (global) return global.get({ plain: true })
    return global
  } catch (err) {
    throw err
  }
}
