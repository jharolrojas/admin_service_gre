import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface UserSessionAttributes {
  id?: number
}
export interface UserSessionModel extends Model<UserSessionAttributes>, UserSessionAttributes {}
export class UserSession extends Model<UserSessionModel, UserSessionAttributes> {}

export type UserSessionStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserSessionModel
}

export function UserFactory(sequelize: Sequelize): UserSessionStatic {
  return <UserSessionStatic>sequelize.define(
    'user_session',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      initialAutoIncrement: '1',
      tableName: 'user_session',
      timestamps: false,
    }
  )
}
