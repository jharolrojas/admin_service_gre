import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

// Definición de los atributos del modelo Expense
export interface ExpenseAttributes {
  // Llave primaria 
  id?: number;
  
  // IDs de tipos de moneda, gasto, pago y servicio
  type_coin_id?: string;
  type_expense_id?: string;
  type_payment_id?: string;
  expense_for_id?: string;

  amount: string;
  
  // Descripción del gasto
  description?: string;

  // Estado del gasto
  status?: boolean;

  // Campos de auditoría
  created_by?: number;
  updated_by?: number;
  created_date?: Date;
  updated_date?: Date;
}

// Definición del modelo Expense que extiende los atributos y el Model de Sequelize
export interface ExpenseModel extends Model<ExpenseAttributes>, ExpenseAttributes {}
export class Expense extends Model<ExpenseModel, ExpenseAttributes> {}

export type ExpenseStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ExpenseModel;
};

// Definición de la fábrica del modelo Expense
export function ExpenseFactory(sequelize: Sequelize): ExpenseStatic {
  return <ExpenseStatic>sequelize.define(
    'expense',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      type_coin_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      type_expense_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      type_payment_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      expense_for_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      amount: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
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
      tableName: 'expense',
      timestamps: false,
    }
  );
}
