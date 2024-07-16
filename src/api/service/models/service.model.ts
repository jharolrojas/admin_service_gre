import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

// Definición de los atributos del modelo Service
export interface ServiceAttributes {
  // Llave primaria
  id?: number;

  // Detalles del servicio
  name: string;
  level_id: string;
  description: string;

  // Estado del servicio
  status?: boolean;

  // Campos de auditoría
  created_by?: number;
  updated_by?: number;
  created_date?: Date;
  updated_date?: Date;
}

// Definición del modelo Service que extiende los atributos y el Model de Sequelize
export interface ServiceModel extends Model<ServiceAttributes>, ServiceAttributes {}
export class Service extends Model<ServiceModel, ServiceAttributes> {}

export type ServiceStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ServiceModel;
};

// Definición de la fábrica del modelo Service
export function ServiceFactory(sequelize: Sequelize): ServiceStatic {
  return <ServiceStatic>sequelize.define(
    'service',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      level_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_date: {
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
      tableName: 'service',
      timestamps: false,
    }
  );
}
