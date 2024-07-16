import { Op, QueryTypes } from 'sequelize'
import { DataBase } from '../../../../database'
import moment from 'moment'
import { momentCustom } from '../../../../utils/moment';

export const closeAllSession = async ({ userId, rol }: { userId: number; rol: number }) => {
  try {
    return await DataBase.instance.token.update(
      {
        last_session: moment.utc(),
        state: false,
      },
      {
        where: {
          [Op.and]: {
            userId,
            state: true,
            rol,
          },
        },
      }
    )
  } catch (err) {
    throw err
  }
}
export const closeAllSessionPostulations = async ({ userId, rol }: { userId: number; rol: string }) => {
  try {
    return await DataBase.instance.sequelize.query(
      `
      UPDATE token SET 
        last_session ="${moment.utc()}", 
        state = false 
      WHERE 
        userId = "${userId}" AND state = true AND rol = "${rol}";
    `,
      {
        type: QueryTypes.UPDATE,
      }
    )
  } catch (err) {
    throw err
  }
}
export const updateToken = async ({
  uuid,
  state,
  last_petition,
  last_session,
}: {
  uuid?: string
  state?: boolean
  last_petition?: Date
  last_session?: Date
}) => {
  try {
    return await DataBase.instance.token.update(
      {
        last_session: last_session || momentCustom,
        state,
        last_petition,
      },
      {
        where: {
          [Op.and]: {
            uuid,
            state: true,
          },
        },
      }
    )
  } catch (err) {
    throw err
  }
}
