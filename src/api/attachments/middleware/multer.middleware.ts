const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req:any, file:any, cb:any) {
    const dest = path.join(__dirname, "../attachments");
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }

    cb(null, dest);
  },
  filename: function (req:any, file:any, cb:any) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

/**
 * Separa el contenido de un multipart form en body y file a través de la Request.
 * @param {string} fieldName Nombre del campo File ubicado en el multipart form
 * @returns Middleware
 */
export const uploadSingleFile = (fieldName:any) => {
  return (req:any, res:any, next:any) => {
    const middleware = upload.single(fieldName);
    middleware(req, res, (err:any) => {
      if (err) {
        if (req.file) {
          fs.unlink(req.file.path, (error:any) => {
            if (error) {
              console.log("Error al eliminar archivo : ", error);
            }
          });
        }
        console.log("uploadSingleFile :: ", err);
        return res.status(500).json({ err: "Error al procesar archivo" });
      }
      next();
    });
  };
};

/**
 * Separa el contenido de un multipart form en body y file a través de la Request.
 * @param {string} fieldName Nombre del campo File ubicado en el multipart form
 * @param {number} maxCount Máximo número de archivos a procesar
 * @returns Middleware
 */
export const uploadMultipleFiles = (fieldName:any, maxCount = undefined) => {
  return (req:any, res:any, next:any) => {
    const middleware = upload.array(fieldName, maxCount);
    middleware(req, res, (err:any) => {
      if (err) {
        if (req.files) {
          let i = 0;
          req.files.forEach((file:any) => {
            fs.unlink(file.path, (error:any) => {
              if (error && i == 0) {
                console.error("Error al eliminar el archivo:", error);
                i++;
              }
            });
          });
        }
        console.log("uploadMultipleFiles :: ", err);
        return res.status(500).json({ err: "Error al procesar múltiples archivos" });
      }
      console.log(req.files);
      
      next();
    });
  };
};


