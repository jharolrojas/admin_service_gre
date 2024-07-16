// import { UserStatic } from '../../api/user/models/user.model'
// import { UserChallengeStatic } from '../../api/user_challenge/models/user.challenge.model'
// import { FinishAnsweringStatic } from '../../api/finish_answering/models/finish_answering.model'
// import { BankAccountStatic } from '../../api/bank_account/models/back.account.model'
// import { EntryStatic } from '../../api/entry/models/entry.model'
// import { AnswerStatic } from '../../api/answer/models/answer.model'
// import { EntryTypeStatic } from '../../api/entry_type/models/entry.type.model'
// import { PackageStatic } from '../../api/package/models/package.model'
//*@DESC User has many bank accounts
// export const userHasManyBankAccount = ({
//   user,
//   back_account,
// }: {
//   user: UserStatic
//   back_account: BankAccountStatic
// }): void => {
//   user.hasMany(back_account, {
//     foreignKey: 'userId',
//     sourceKey: 'id',
//   })
//   back_account.belongsTo(user, {
//     foreignKey: 'userId',
//     targetKey: 'id',
//   })
// }
// //*@DESC User has many entries
// export const userHasManyEntry = ({ user, entry }: { user: UserStatic; entry: EntryStatic }): void => {
//   user.hasMany(entry, {
//     foreignKey: 'userId',
//     sourceKey: 'id',
//   })
//   entry.belongsTo(user, {
//     foreignKey: 'userId',
//     targetKey: 'id',
//   })
// }

// import { CompanyStatic } from '../../api/company/models/company.model'
// import { JobAttributes, JobStatic } from '../../api/jobs/models/job.model';
// import { GeneralVariablesAttributes } from '../../api/general_variables/models/general.variables.model'
// import { JobStatic } from '../../api/jobs/models/job.model'
import { UserStatic } from '../../api/user/models/user.model'

// export const userHasManyAnswer = ({
//   user,
//   answer,
// }: {
//   user: UserStatic
//   answer: AnswerStatic
// }): void => {
//   user.hasMany(answer, {
//     foreignKey: 'userId',
//     sourceKey: 'id',
//   })
//   answer.belongsTo(user, {
//     foreignKey: 'userId',
//     targetKey: 'id',
//   })
// }
//*@DESC User has many entries types

// export const userHasManyEntryType = ({
//   user,
//   entry_type,
// }: {
//   user: UserStatic
//   entry_type: EntryTypeStatic
// }): void => {
//   user.hasMany(entry_type, {
//     foreignKey: 'userId',
//     sourceKey: 'id',
//   })
//   entry_type.belongsTo(user, {
//     foreignKey: 'userId',
//     targetKey: 'id',
//   })
// }

// export const userbelongsToMany = ({
//   user,
//   _package,
// }: {
//   user: UserStatic
//   _package: PackageStatic
// }): void => {
//   user.belongsToMany(_package, {
//     foreignKey: 'userId',
//     sourceKey: 'id',
//     through:'user_package'
//   })

//   _package.belongsToMany(user, {
//     foreignKey: 'packageId',
//     targetKey: 'id',
//     through:'user_package'

//   })
// }

//*@DESC User has many entries
// export const userHasManyChallenge = ({
//   user,
//   user_challenge,
// }: {
//   user: UserStatic
//   user_challenge: UserChallengeStatic
// }): void => {
//   user.hasMany(user_challenge, {
//     foreignKey: 'userId',
//     sourceKey: 'id',
//   })
//   user_challenge.belongsTo(user, {
//     foreignKey: 'userId',
//     targetKey: 'id',
//   })
// }

// export const userHasFinishAnswering = ({
//   user,
//   finishAnswering,
// }: {
//   user: UserStatic
//   finishAnswering: FinishAnsweringStatic
// }): void => {
//   user.hasOne(finishAnswering,{
//     foreignKey:'userId'
//   })
// user.hasMany(user_challenge, {
//   foreignKey: 'userId',
//   sourceKey: 'id',
// })
// user_challenge.belongsTo(user, {
//   foreignKey: 'userId',
//   targetKey: 'id',
// })
// }
// export const companyHasUser = ({ user, company }: { user: UserStatic; company: CompanyStatic }): void => {
//   company.hasMany(user, {
//     foreignKey: 'id_company',
//     sourceKey: 'id',
//   })
//   user.belongsTo(company, {
//     foreignKey: 'id_company',
//     targetKey: 'id',
//   })
// }
// export const userHasJob = ({ user, job }: {  job: JobStatic;  user: UserStatic;}): void => {
//   user.hasMany(job, {
//     foreignKey: 'created_by',
//     sourceKey: 'id',
//   })
//   job.belongsTo(user, {
//     foreignKey: 'created_by',
//     targetKey: 'id',
//   })
// }

// export const companyHasJob = ({ job, company }: { job: JobStatic; company: CompanyStatic }): void => {
//   company.hasMany(job, {
//     foreignKey: 'company_id',
//     sourceKey: 'id',
//   })
//   job.belongsTo(company, {
//     foreignKey: 'company_id',
//     targetKey: 'id',
//   })
// }
// export const jobHasVarGeneraly = ({
//   general_variables,
//   job,
// }: {
//   general_variables: GeneralVariablesAttributes
//   job: JobStatic
// }): void => {
//   general_variables.hasMany(job, {
//     foreignKey: 'work_experience_id',
//     sourceKey: 'id',
//   })
//   job.belongsTo(general_variables, {
//     foreignKey: 'work_experience_id',
//     targetKey: 'id',
//   })
// }
