import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface PostulationHasManyAttachmentsAttributes {
  //  llave  primaria
  id: number;

  // datos
  postulation_id: number;
  attachments_id: number;

  // estado de la fila
  status: boolean;

  // campos de auditoria
  created_date: Date;
  created_by?: number | null;
  updated_date?: Date | null;
  updated_by?: number | null;
}
export interface PostulationHasManyAttachmentsPartialAttributes
  extends Partial<PostulationHasManyAttachmentsAttributes> {}

export interface PostulationHasManyAttachmentsModel
  extends Model<PostulationHasManyAttachmentsAttributes>,
    PostulationHasManyAttachmentsAttributes {}
export class attachmentsHasManyRequirements extends Model<
PostulationHasManyAttachmentsModel,
  PostulationHasManyAttachmentsAttributes
> {}

export type PostulationHasManyAttachmentsStatic = typeof Model & {
  new (
    values?: object,
    options?: BuildOptions
  ): PostulationHasManyAttachmentsModel;
};

export function PostulationHasManyAttachmentsFactory(
  sequelize: Sequelize
): PostulationHasManyAttachmentsStatic {
  return <PostulationHasManyAttachmentsStatic>sequelize.define(
    "postulation_has_many_attachments",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      postulation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      attachments_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: "postulation_has_many_attachments",
      timestamps: false,
    }
  );
}
