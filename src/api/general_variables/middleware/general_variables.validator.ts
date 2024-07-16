import { body, param } from 'express-validator';

export const createGeneralVariablesValidator = [
  body('value').optional().isString().withMessage('El valor debe ser una cadena de caracteres.'),
  body('description').optional().isString().withMessage('La descripción debe ser una cadena de caracteres.'),
  body('ref1').isString().withMessage('La referencia 1 debe ser una cadena de caracteres.'),
  body('ref2').optional().isString().withMessage('La referencia 2 debe ser una cadena de caracteres.'),
  body('ref3').optional().isString().withMessage('La referencia 3 debe ser una cadena de caracteres.'),
  body('ref4').optional().isString().withMessage('La referencia 4 debe ser una cadena de caracteres.'),
];

export const updateGeneralVariablesValidator = [
  body('value').optional().isString().withMessage('El valor debe ser una cadena de caracteres.'),
  body('description').optional().isString().withMessage('La descripción debe ser una cadena de caracteres.'),
  body('ref1').optional().isString().withMessage('La referencia 1 debe ser una cadena de caracteres.'),
  body('ref2').optional().isString().withMessage('La referencia 2 debe ser una cadena de caracteres.'),
  body('ref3').optional().isString().withMessage('La referencia 3 debe ser una cadena de caracteres.'),
  body('ref4').optional().isString().withMessage('La referencia 4 debe ser una cadena de caracteres.'),
  body('status').optional().isBoolean().withMessage('El estado debe ser un valor booleano.'),
];


export const idCodeValidator = [
  param('id_code').isString().withMessage('El código ID debe ser una cadena de caracteres.'),
];

export const getGeneralvariablesByRef1Validator = [
  param('ref1').isString().withMessage('La referencia 1 debe ser una cadena de caracteres.'),
];
