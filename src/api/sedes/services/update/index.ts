import { DataBase } from '../../../../database'
import { SedeAttributes } from '../../models/sede.model'
import { WhereOptions } from 'sequelize'
import { momentCustom } from '../../../../utils/moment'

export const updateSedeService = async ({
  sede,
  where,
}: {
  sede: SedeAttributes
  where: WhereOptions<SedeAttributes>
}) => {
  try {
    return await DataBase.instance.sede.update(
      {
        updated_date:momentCustom,
        state: true,
        ...sede,
      },
      { where }
    )
  } catch (error) {
    throw error
  }
}
