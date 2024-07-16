import S3 from "../../../utils/awsS3";
import * as fs from "fs";
import { AttachmentsAttributes } from "../model/attachments.model";
import { DataBase } from "../../../database";
import { momentCustom } from "../../../utils/moment";
// verificar la logica de borrado en caso no se suba el archivo
export const saveS3 = async ({
  url_file,
  new_name,
  user,
  original_name,
  content_type,
  size,
  file_doc_name,
}: {
  url_file: string;
  new_name: string;
  user: number;
  original_name: string;
  content_type: string;
  file_doc_name: string;
  size: string;
}) => {
  try {
    console.log("entre al saves3");
    
    const { url } = await S3.getInstance().uploadByFilePath(url_file, new_name);
    console.log("url",url);
    
    const file: AttachmentsAttributes = {
      id: 0,
      url,
      size,
      new_name,
      content_type,
      original_name,
      file_doc_name,

      status: true,
      created_date: momentCustom,
      created_by: user,
    };    
      fs.unlink(url_file, (err) => {
        if (err) {
          console.error(`Error al borrar el archivo: ${err.message}`);
        } else {
          console.log(`Archivo ${url_file} ha sido eliminado con éxito.`);
        }
      });
      const { id } = await DataBase.instance.attachments.create(file);
    console.log("id",id);
      return id;
    
  } catch (error) {
    throw error;
  }
};
