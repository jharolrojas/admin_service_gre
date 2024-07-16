import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

// Definición de los atributos del modelo Ticket
export interface TicketAttributes {
  // Llave primaria
  id?: number;

  // IDs relacionados
  client_id?: number;
  service_id?: string;
  technical_id?: number;

  // Detalles del ticket
  hour?: string;
  date?: string;
  how_long?: string;
  service_status_id?: string;
  amount?: string;
  status_payment_id?: string;
  type_payment_id?: string;
  description:string

  // Estado del ticket
  status?: boolean;

  // Campos de auditoría
  created_by?: number;
  updated_by?: number;
  created_date?: Date;
  updated_date?: Date;
}

// Definición del modelo Ticket que extiende los atributos y el Model de Sequelize
export interface TicketModel extends Model<TicketAttributes>, TicketAttributes {}
export class Ticket extends Model<TicketModel, TicketAttributes> {}

export type TicketStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TicketModel;
};

// Definición de la fábrica del modelo Ticket
export function TicketFactory(sequelize: Sequelize): TicketStatic {
  return <TicketStatic>sequelize.define(
    'ticket',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      service_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      technical_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hour: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      how_long: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      service_status_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      amount: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status_payment_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      type_payment_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
      tableName: 'ticket',
      timestamps: false,
    }
  );
}
