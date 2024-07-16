import { v4 as uuidv4 } from 'uuid'
import { DataBase } from '../../../../database'
import { TokenAttributes } from '../../models/token.model'
import { momentCustom } from '../../../../utils/moment'

export const createToken = async ({
  userId,
  rol,
}: {
  userId?: number
  rol: number
}): Promise<TokenAttributes> => {
  try {
    return await DataBase.instance.token.create({
      userId: userId,
      uuid: uuidv4(),
      start_session: momentCustom,
      last_petition: momentCustom,
      rol,
    })
  } catch (err) {
    throw err
  }
}


