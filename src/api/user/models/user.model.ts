import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

// Definición de los atributos del modelo User
export interface UserAttributes {
  // Llave primaria
  id?: number;

  // Datos personales del usuario
  name_p?: string;
  name_s?: string;
  lastname_m?: string;
  lastname_p?: string;
  number_document?: string;
  type_document_id?: string;
  email?: string;
  gender_id?: string;
  number_phone_1?: string;
  number_phone_2?: string;
  address?: string;
  birthdate?: string;
  salary?: string;
  level_id?: string;
  rol_id:string

  // Estado del usuario
  status?: string;


  // Seguridad
  password?: string;
  salt?: string;
  code_verification?: string;
  numIntentos?: number;
  fechaFinBloqueo?: Date;
  hora_bloqueo?: Date;
  cantidad_min_bloqueado?: number;
  state?: boolean;
  number_of_sessions?: number;

  // Campos de auditoría
  created_by?: number;
  updated_by?: number;
  created_date?: Date;
  updated_date?: Date;

}

// Definición del modelo User que extiende los atributos y el Model de Sequelize
export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

// Definición de la fábrica del modelo User
export function UserFactory(sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      rol_id:{
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      type_document_id:{
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      name_p: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      name_s: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      lastname_m: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      lastname_p: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      number_document: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      gender_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      number_phone_1: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      number_phone_2: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      birthdate: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      salary: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      level_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(255),
        defaultValue: 'H',
      },
      password: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      salt: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      code_verification: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      numIntentos: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      fechaFinBloqueo: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      hora_bloqueo: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      cantidad_min_bloqueado: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      number_of_sessions: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
      tableName: 'user',
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['email'],
        },
      ],
    }
  );
}
