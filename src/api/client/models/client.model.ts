import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

// Definición de los atributos del modelo Client
export interface ClientAttributes {
  // Llave primaria
  id?: number;
  // Datos personales del cliente
  gender_id?: string;
  number_phone_1?: string;
  full_name:string;
  full_lastname?:string | undefined;
  address?: string;
  // name_p?: string;
  // name_s?: string;
  // lastname_m?: string;
  // lastname_p?: string;
  // number_document?: string;
  // type_document_id?: string;
  // email?: string;
  // number_phone_2?: string;
  // birthdate?: string;

  // Estado del cliente
  status?: boolean;

  // Cantidad de trabajos
  // job_count?: number;

  // Cantidad de trabajos rechazados
  // rejected_job_count?: number;

  // Cantidad de trabajos fallidos
  // failed_job_count?: number;

  // Cantidad de trabajos con éxito
  // successful_job_count?: number;

  // Campos de auditoría
  created_by?: number;
  updated_by?: number;
  created_date?: Date;
  updated_date?: Date;
}

// Definición del modelo Client que extiende los atributos y el Model de Sequelize
export interface ClientModel extends Model<ClientAttributes>, ClientAttributes {}
export class Client extends Model<ClientModel, ClientAttributes> {}

export type ClientStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ClientModel;
};

// Definición de la fábrica del modelo Client
export function ClientFactory(sequelize: Sequelize): ClientStatic {
  return <ClientStatic>sequelize.define(
    'client',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      gender_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      full_lastname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      full_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      number_phone_1: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      // name_p: {
      //   type: DataTypes.STRING(100),
      //   allowNull: false,
      // },
      // name_s: {
      //   type: DataTypes.STRING(100),
      //   allowNull: true,
      // },
      // lastname_m: {
      //   type: DataTypes.STRING(100),
      //   allowNull: true,
      // },
      // lastname_p: {
      //   type: DataTypes.STRING(100),
      //   allowNull: false,
      // },
      // number_document: {
      //   type: DataTypes.STRING(50),
      //   allowNull: false,
      //   unique: false,
      // },
      // type_document_id: {
      //   type: DataTypes.STRING(50),
      //   allowNull: false,
      // },
      // email: {
      //   type: DataTypes.STRING(100),
      //   allowNull: false,
      // },
    
      // number_phone_2: {
      //   type: DataTypes.STRING(15),
      //   allowNull: true,
      // },
      
      // birthdate: {
      //   type: DataTypes.STRING(255),
      //   allowNull: true,
      // },
      // job_count: {
      //   type: DataTypes.INTEGER,
      //   defaultValue: 0,
      // },
      // rejected_job_count: {
      //   type: DataTypes.INTEGER,
      //   defaultValue: 0,
      // },
      // failed_job_count: {
      //   type: DataTypes.INTEGER,
      //   defaultValue: 0,
      // },
      // successful_job_count: {
      //   type: DataTypes.INTEGER,
      //   defaultValue: 0,
      // },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
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
      tableName: 'client',
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['number_phone_1'],
        },
      ],
    }
  );
}
