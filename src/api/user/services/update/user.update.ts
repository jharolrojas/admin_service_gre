import { DataBase } from '../../../../database'
import { momentCustom } from '../../../../utils/moment'
import { UpdateUserRequest } from '../../interfaz/user.interfaz'

export const updateUserService = async ({
  where, payload
}: UpdateUserRequest): Promise<any> => {
  try {
    return await DataBase.instance.user.update(
      {...payload,
        updated_date:momentCustom
      },
      {
        where
      }
    )
  } catch (err) {
    throw err
  }
}