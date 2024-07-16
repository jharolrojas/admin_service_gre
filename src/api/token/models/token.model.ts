import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface TokenAttributes {
  id?: number
  userId?: number
  start_session?: Date
  last_petition?: Date
  last_session?: Date
  rol?: number
  uuid?: string
  state?: boolean
}
export interface TokenModel extends Model<TokenAttributes>, TokenAttributes {}
export class Token extends Model<TokenModel, TokenAttributes> {}

export type TokenStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TokenModel
}

export function TokenFactory(sequelize: Sequelize): TokenStatic {
  return <TokenStatic>sequelize.define(
    'token',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
      },

      start_session: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      last_petition: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      last_session: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      uuid: {
        type: DataTypes.STRING(50),
      },
      rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      initialAutoIncrement: '1',
      tableName: 'token',
      timestamps: false,
    }
  )
}
