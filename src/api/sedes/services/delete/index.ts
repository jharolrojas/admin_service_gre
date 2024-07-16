import { WhereOptions } from 'sequelize'
// import { CompanyAttributes } from '../../../company/models/company.model'
import { DataBase } from '../../../../database'
import { momentCustom } from '../../../../utils/moment'

// export const disabledEnabledSede = async ({
//   where,
//   updated_by,
//   state,
// }: {
//   where: WhereOptions<CompanyAttributes>
//   updated_by?: number
//   state?: boolean
// }) => {
//   try {
//     return await DataBase.instance.sede.update(
//       {
//         state,
        // updated_date: momentCustom,
//         updated_by,
//       },
//       {
//         where,
//       }
//     )
//   } catch (err) {
//     throw err
//   }
// }
