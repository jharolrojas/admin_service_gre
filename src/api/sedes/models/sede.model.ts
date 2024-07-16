import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface SedeAttributes {
  id?: number
  name?:string
  location?:string
  company_id?: number
  state?: boolean
  created_by?: number
  updated_by?: number
  created_date?: Date
  updated_date?: Date
}

export interface SedeModel extends Model<SedeAttributes>, SedeAttributes {}
export class Sede extends Model<SedeModel, SedeAttributes> {}

export type SedeStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): SedeModel
}

export function SedeFactory(sequelize: Sequelize): SedeStatic {
  return <SedeStatic>sequelize.define(
    'sede',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: true,

      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,

      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,

      },

      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      created_by: {
        type: DataTypes.INTEGER,
      },
      updated_by: {
        type: DataTypes.INTEGER,
      },
      create_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },

    {
      initialAutoIncrement: '1',
      tableName: 'sede',
      timestamps: false,
    }
  )
}
