import { body, param, query } from 'express-validator';
import { verifyEmail } from '../custom/custom';

export const addUserValidation = [
  body('name_p').isString().withMessage('El primer nombre debe ser una cadena de caracteres.'),
  body('name_s').optional().isString().withMessage('El segundo nombre debe ser una cadena de caracteres.'),
  body('lastname_m').isString().withMessage('El apellido materno debe ser una cadena de caracteres.'),
  body('lastname_p').optional().isString().withMessage('El apellido paterno debe ser una cadena de caracteres.'),
  body('number_document').isString().withMessage('El número de documento debe ser una cadena de caracteres.'),
  body('type_document_id').isString().withMessage('El tipo de documento debe ser una cadena de caracteres.'),
  body('email').isEmail().withMessage('Debe ser un correo electrónico válido.').custom(verifyEmail),
  body('gender_id').isString().withMessage('El ID de género debe ser una cadena de caracteres.'),
  body('number_phone_1').isString().withMessage('El primer número de teléfono debe ser una cadena de caracteres.'),
  body('number_phone_2').optional().isString().withMessage('El segundo número de teléfono debe ser una cadena de caracteres.'),
  body('address').isString().withMessage('La dirección debe ser una cadena de caracteres.'),
  body('birthdate').matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('La fecha de nacimiento debe ser una fecha válida en el formato "YYYY-MM-DD".'),
  body('salary').optional().isFloat({ min: 0 }).withMessage('El salario debe ser un número positivo.'),
  body('level_id').isString().withMessage('El nivel debe ser una cadena de caracteres.'),
  body('rol_id').isString().withMessage('El rol debe ser una cadena de caracteres.'),
  body('password').optional().isString().isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.')
    .matches(/[a-zA-Z]/).withMessage('La contraseña debe contener al menos una letra.')
    .matches(/\d/).withMessage('La contraseña debe contener al menos un número.')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('La contraseña debe contener al menos un carácter especial.'),
];

export const updateUserValidation = [
  body('name_p').optional().isString().withMessage('El primer nombre debe ser una cadena de caracteres.'),
  body('name_s').optional().isString().withMessage('El segundo nombre debe ser una cadena de caracteres.'),
  body('lastname_m').optional().isString().withMessage('El apellido materno debe ser una cadena de caracteres.'),
  body('lastname_p').optional().isString().withMessage('El apellido paterno debe ser una cadena de caracteres.'),
  body('number_document').optional().isString().withMessage('El número de documento debe ser una cadena de caracteres.'),
  body('type_document_id').optional().isString().withMessage('El tipo de documento debe ser una cadena de caracteres.'),
  body('email').optional().isEmail().withMessage('Debe ser un correo electrónico válido.').custom(verifyEmail),
  body('gender_id').optional().isString().withMessage('El ID de género debe ser una cadena de caracteres.'),
  body('number_phone_1').optional().isString().withMessage('El primer número de teléfono debe ser una cadena de caracteres.'),
  body('number_phone_2').optional().isString().withMessage('El segundo número de teléfono debe ser una cadena de caracteres.'),
  body('address').optional().isString().withMessage('La dirección debe ser una cadena de caracteres.'),
  body('birthdate').optional().matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('La fecha de nacimiento debe ser una fecha válida en el formato "YYYY-MM-DD".'),
  body('salary').optional().isFloat({ min: 0 }).withMessage('El salario debe ser un número positivo.'),
  body('level_id').optional().isString().withMessage('El nivel debe ser una cadena de caracteres.'),
  body('rol_id').optional().isString().withMessage('El rol debe ser una cadena de caracteres.'),
  body('state').optional().isBoolean().isIn([false, true]).withMessage('El estado solo recibe valores lógicos TRUE o FALSE'),
];

export const UserIdValidation = [
  param('user_id').isNumeric().withMessage('El ID del usuario debe ser un número entero positivo.').isInt({ min: 1 }),
];


export const listValidation =
  [
    query('page').isInt({ min: 1 }).withMessage('El parámetro "page" debe ser un número entero positivo.'),
    query('limit').isInt({ min: 1 }).withMessage('El parámetro "limit" debe ser un número entero positivo.'),
    query('order').isString().withMessage('El parámetro "order" debe ser una cadena de caracteres.'),
    query('search').optional().isString().withMessage('El parámetro "search" debe ser una cadena de caracteres.'),
    query('rol').optional().isInt({ min: 1 }).withMessage('El parámetro "rol" debe ser un número entero positivo.')
  ];
