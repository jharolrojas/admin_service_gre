import { body, param, query, ValidationChain } from 'express-validator';

export const addServiceValidation: ValidationChain[] = [
  body('name').notEmpty().withMessage('El nombre es requerido'),
  body('level_id').isString().notEmpty().withMessage('Se requiere el código único'),
  body('description').notEmpty().withMessage('La descripción debe ser proporcionada si se incluye'),
];

export const updateServiceValidation: ValidationChain[] = [
  body('name').optional().notEmpty().withMessage('El nombre es requerido'),
  body('level_id').optional().isString().notEmpty().withMessage('Se requiere el código único'),
  body('description').optional().notEmpty().withMessage('La descripción debe ser proporcionada si se incluye'),
  body('status').optional().isBoolean().withMessage('El estado debe ser un valor booleano'),
];

export const serviceIdValidation: ValidationChain[] = [
  param('service_id').isNumeric().withMessage('El ID del cliente debe ser un número entero positivo').isInt({ min: 1 }),
];

export const listValidation: ValidationChain[] = [
  query('page').isInt({ min: 1 }).withMessage('El parámetro "page" debe ser un número entero positivo.'),
  query('limit').isInt({ min: 1 }).withMessage('El parámetro "limit" debe ser un número entero positivo.'),
  query('order').isString().withMessage('El parámetro "order" debe ser una cadena de caracteres.'),
  query('search').optional().isString().withMessage('El parámetro "search" debe ser una cadena de caracteres.'),
];
