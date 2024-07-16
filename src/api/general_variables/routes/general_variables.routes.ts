import { Router } from "express";
import {
  createGeneralVariablesController,
  findGeneralVariablesByIdCodeController,
  getListGeneralVariablesController,
  updateGeneralVariablesController
} from "../controllers/general.variables.controller";

import { allValidator } from "../../../shared/express.validator";
import { createGeneralVariablesValidator, getGeneralvariablesByRef1Validator, idCodeValidator } from "../middleware/general_variables.validator";

export const router: Router = Router();

// Ruta para obtener todas las variables generales
router.get('/general_variables/all/code',allValidator, getListGeneralVariablesController);

// Ruta para obtener una variable general por su código
router.get('/general_variables/:id_code', idCodeValidator,allValidator, findGeneralVariablesByIdCodeController);

// Ruta para obtener variables generales por ref1
router.get('/general_variables/ref1/:ref1', getGeneralvariablesByRef1Validator,allValidator, getListGeneralVariablesController);

// Ruta para crear una nueva variable general
router.post('/general_variables', createGeneralVariablesValidator,allValidator, createGeneralVariablesController);

// Ruta para actualizar una variable general por su ID
router.put('/general_variables/:id_code', idCodeValidator,allValidator, updateGeneralVariablesController);

// Ruta para deshabilitar una variable general por su ID
router.delete('/general_variables/:id_code', idCodeValidator,allValidator, updateGeneralVariablesController);
