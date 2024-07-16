import { Sequelize } from 'sequelize'
import config from '../config/environments'
import { UserFactory, UserStatic } from '../api/user/models/user.model'

import { TokenStatic, TokenFactory } from '../api/token/models/token.model'

import { GlobalFactory, GlobalStatic } from '../api/global/models/global.model'
import {
  GeneralVariablesFactory,
  GeneralVariablesStatic,
} from '../api/general_variables/models/general.variables.model'



// import { companyHasJob, companyHasUser, jobHasVarGeneraly } from './associations/user'
import { SedeFactory, SedeStatic } from '../api/sedes/models/sede.model'
// import { companyHasUser, userHasJob } from './associations/user'
import { AttachmentsFactory, AttachmentsStatic } from '../api/attachments/model/attachments.model'
import { ClientFactory, ClientStatic } from '../api/client/models/client.model'
import { ExpenseFactory, ExpenseStatic } from '../api/expense/models/expense.models'
import { ServiceFactory, ServiceStatic } from '../api/service/models/service.model'
import { TicketFactory, TicketStatic } from '../api/ticket/models/ticket.model'

export class DataBase {
  private static _instance: DataBase
  public sequelize: Sequelize
  private _config = config
  public user: UserStatic
  public token: TokenStatic
  public client: ClientStatic
  public service: ServiceStatic
  public expense: ExpenseStatic
  public ticket: TicketStatic




  public global: GlobalStatic
  public general_variables: GeneralVariablesStatic
  public sede: SedeStatic
  public attachments: AttachmentsStatic

  constructor() {
    this.sequelize = new Sequelize(
      this._config.PROY_BD!,
      this._config.PROY_BD_USER!,
      this._config.PROY_BD_PASS,
      {
        host: this._config.PROY_BD_HOST,
        port: Number(this._config.PROY_BD_PORT),
        logging: false,
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      }
    )
    this.user = UserFactory(this.sequelize)
    this.token = TokenFactory(this.sequelize)
    this.global = GlobalFactory(this.sequelize)
    this.general_variables = GeneralVariablesFactory(this.sequelize)
    this.sede = SedeFactory(this.sequelize)
    this.attachments = AttachmentsFactory(this.sequelize)
    this.client = ClientFactory(this.sequelize)
    this.service = ServiceFactory(this.sequelize)
    this.expense = ExpenseFactory(this.sequelize)
    this.ticket = TicketFactory(this.sequelize)




    this.associations()
    this.connectDb()
  }
  public static get instance(): DataBase {
    return this._instance || (this._instance = new this())
  }
  private connectDb(): void {
    this.sequelize
      .authenticate()
      // .sync({ alter: true, logging: console.log })
      .then(() => {
        // this.user.sync({ alter: true, logging: console.log })
        // this.token.sync({ alter: true, logging: console.log })
        // this.general_variables.sync({ alter: true, logging: console.log })


        // this.client.sync({ alter: true, logging: console.log })
        // this.service.sync({ alter: true, logging: console.log })
        // this.expense.sync({ alter: true, logging: console.log })
        // this.ticket.sync({ alter: true, logging: console.log })



        // this.sede.sync({ alter: true, logging: console.log })
        // this.attachments.sync({ alter: true, logging: console.log })
        console.log('¡Run database!')
      })
      .catch((err) => console.log('error', err))
  }
  private associations(): void {
  }
}
