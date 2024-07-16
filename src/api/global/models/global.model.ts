import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface GlobalAttributes {
  id?: number
  key?: string
  value?: string
}
export interface GlobalModel extends Model<GlobalAttributes>, GlobalAttributes {}
export class Global extends Model<GlobalModel, GlobalAttributes> {}

export type GlobalStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): GlobalModel
}

export function GlobalFactory(sequelize: Sequelize): GlobalStatic {
  return <GlobalStatic>sequelize.define(
    'global',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      key: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      value: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
    },
    {
      initialAutoIncrement: '1',
      tableName: 'global',
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['key'],
        },
      ],
    }
  )
}
