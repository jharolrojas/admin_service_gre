import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface GeneralVariablesAttributes {
  id?: number;
  id_code?: string;
  value?: string;
  description?: string;
  ref1?: string;
  ref2?: string;
  ref3?: string;
  ref4?: string;
  status?: boolean;

  created_by?: number;
  created_date?: Date;
  updated_date?: Date;
  updated_by?: number;
}

export interface GeneralVariablesModel extends Model<GeneralVariablesAttributes>, GeneralVariablesAttributes { }

export class GeneralVariables extends Model<GeneralVariablesModel, GeneralVariablesAttributes> { }

export type GeneralVariablesStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): GeneralVariablesModel;
};

export function GeneralVariablesFactory(sequelize: Sequelize): GeneralVariablesStatic {
  return <GeneralVariablesStatic>sequelize.define('general_variables', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_code: { type: DataTypes.STRING(255), },
    value: { type: DataTypes.STRING(200) },
    description: { type: DataTypes.TEXT },
    ref1: { type: DataTypes.STRING(100) },
    ref2: { type: DataTypes.STRING(100) },
    ref3: { type: DataTypes.STRING(100) },
    ref4: { type: DataTypes.STRING(100) },
    updated_by: { type: DataTypes.INTEGER },
    created_by: { type: DataTypes.INTEGER },
    status: { type: DataTypes.BOOLEAN },
    updated_date: { type: DataTypes.DATE },
    created_date: { type: DataTypes.DATE },
  }, {
    initialAutoIncrement: '1',
    tableName: 'general_variables',
    timestamps: false,
    indexes: [
      {
        unique: false,
        fields: ['id_code'],
      },
    ],
  });
}
