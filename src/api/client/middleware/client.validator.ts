import { body, param, query } from 'express-validator';

export const validateClient = [
  // body('name_p').notEmpty().withMessage('El nombre principal es requerido'),
  body('full_name').notEmpty().withMessage('El nombre es requerido'),
  // body('full_lastname').notEmpty().withMessage('El apellido es requerido'),
  // body('name_s').optional().notEmpty().withMessage('El segundo nombre debe ser proporcionado si se incluye'),
  // body('lastname_m').optional().notEmpty().withMessage('El primer apellido es requerido'),
  // body('lastname_p').notEmpty().withMessage('El segundo apellido es requerido'),
  // body('number_document').notEmpty().withMessage('El número de documento es requerido').isLength({ min: 8, max: 8 }).withMessage('El número de documento debe tener 8 dígitos.'),
  // body('type_document_id').isString().withMessage('El tipo de documento debe ser un código único'),
  // body('email').isEmail().withMessage('El correo electrónico debe ser válido'),
  body('gender_id').isString().withMessage('El ID de género debe ser un código único en formato texto'),
  body('number_phone_1').isString().isLength({ min: 7, max: 9 }).withMessage('El número de teléfono 1 debe ser válido, debe tener mínimo 7 dígitos y máximo 9'),
  // body('number_phone_2').optional().isString().isLength({ min: 7, max: 9 }).withMessage('El número de teléfono 2 debe ser válido, debe tener mínimo 7 dígitos y máximo 9'),
  body('address').notEmpty().withMessage('La dirección no puede estar vacía si se proporciona'),
  // body('birthdate').matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('La fecha de nacimiento debe ser una fecha válida en el formato "YYYY-MM-DD".'),
];

export const updateClientValidation = [
  // body('name_p').optional().notEmpty().withMessage('El nombre principal es requerido'),
  // body('name_s').optional().notEmpty().withMessage('El segundo nombre debe ser proporcionado si se incluye'),
  // body('lastname_m').optional().notEmpty().withMessage('El primer apellido es requerido'),
  // body('lastname_p').optional().notEmpty().withMessage('El segundo apellido es requerido'),
  // body('number_document').optional().notEmpty().withMessage('El número de documento es requerido').isLength({ min: 8, max: 8 }).withMessage('El número de documento debe tener 8 dígitos.'),
  // body('type_document_id').optional().isString().withMessage('El tipo de documento debe ser un código único en formato texto'),
  // body('email').optional().isEmail().withMessage('El correo electrónico debe ser válido'),
  body('gender_id').optional().isString().withMessage('El ID de género debe ser un código único en formato texto'),
  body('number_phone_1').optional().isString().isLength({ min: 7, max: 9 }).withMessage('El número de teléfono 1 debe ser válido, debe tener mínimo 7 dígitos y máximo 9'),
  // body('number_phone_2').optional().isString().isLength({ min: 7, max: 9 }).withMessage('El número de teléfono 2 debe ser válido, debe tener mínimo 7 dígitos y máximo 9'),
  body('address').optional().notEmpty().withMessage('La dirección no puede estar vacía si se proporciona'),
  // body('birthdate').optional().matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('La fecha de nacimiento debe ser una fecha válida en el formato "YYYY-MM-DD".'),
  body('status').optional().isIn([true, false]).withMessage('Este campo solo acepta valores lógicos como true o false'),

  body('full_name').optional().notEmpty().withMessage('El nombre es requerido'),
  body('full_lastname').optional().notEmpty().withMessage('El apellido es requerido'),
];

export const clientIdValidation = [
  param('client_id').isNumeric().withMessage('El ID del cliente debe ser un número entero positivo.').isInt({ min: 1 }),
];
export const listValidation =
  [
    query('page').isInt({ min: 1 }).withMessage('El parámetro "page" debe ser un número entero positivo.'),
    query('limit').isInt({ min: 1 }).withMessage('El parámetro "limit" debe ser un número entero positivo.'),
    query('order').isString().withMessage('El parámetro "order" debe ser una cadena de caracteres.'),
    query('search').optional().isString().withMessage('El parámetro "search" debe ser una cadena de caracteres.'),
  ];
