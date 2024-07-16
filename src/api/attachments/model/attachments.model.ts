import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface AttachmentsAttributes {
  //  llave  primaria
  id: number;

  // datos
  url: string;
  original_name: string;
  new_name: string;
  content_type: string;
  size: string;
  file_doc_name: string;

  // estado de la fila
  status?: boolean;

  // campos de auditoria
  created_date: Date;
  created_by: number | null;
  updated_date?: Date | null;
  updated_by?: number | null;
}
export interface AttachmentsPartialAttributes
  extends Partial<AttachmentsAttributes> {}

export interface AttachmentsModel
  extends Model<AttachmentsAttributes>,
    AttachmentsAttributes {}
export class Attachments extends Model<
  AttachmentsModel,
  AttachmentsAttributes
> {}

export type AttachmentsStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): AttachmentsModel;
};

export function AttachmentsFactory(sequelize: Sequelize): AttachmentsStatic {
  return <AttachmentsStatic>sequelize.define(
    "attachments",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      url: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      new_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      file_doc_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      original_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      size: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      created_date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("NOW"),
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updated_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      initialAutoIncrement: "1",
      tableName: "attachments",
      timestamps: false,
    }
  );
}
