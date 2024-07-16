import { DataBase } from '../../../../database'
import { momentCustom } from '../../../../utils/moment'
import { UpdateClientPayload } from '../../interfaz/client.interfaz'


export const updateClientService = async ({
  where, payload
}: UpdateClientPayload): Promise<any> => {
  try {
    console.log({where, payload});
    
    return await DataBase.instance.client.update(
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