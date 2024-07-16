import { body, param, query } from 'express-validator';

export const validateExpense = [
  body('type_coin_id').isString().withMessage('El ID de tipo de moneda debe ser un código único'),
  body('type_expense_id').isString().withMessage('El ID de tipo de gasto debe ser un código único'),
  body('type_payment_id').isString().withMessage('El ID de tipo de pago debe ser un código único'),
  body('expense_for_id').isString().withMessage('El ID de quien realizó el gasto debe ser un código único'),
  body('amount').isString().withMessage('Debe ingresar el monto.'),
  body('description').isString().withMessage('La descripción debe ser una cadena de caracteres.'),
];

export const updateExpenseValidation = [
  body('type_coin_id').optional().isString().withMessage('El ID de tipo de moneda debe ser un código único'),
  body('type_expense_id').optional().isString().withMessage('El ID de tipo de gasto debe ser un código único'),
  body('type_payment_id').optional().isString().withMessage('El ID de tipo de pago debe ser un código único'),
  body('expense_for_id').optional().isString().withMessage('El ID de quien realizó el gasto debe ser un código único'),
  body('description').optional().isString().withMessage('La descripción debe ser una cadena de caracteres.'),
  body('status').optional().isBoolean().withMessage('El estado debe ser un valor booleano.'),
  body('amount').optional().isString().withMessage('Debe ingresar el monto.'),
];


export const expenseIdValidation = [
  param('expense_id').isNumeric().withMessage('El ID del gasto debe ser un número entero positivo.').isInt({ min: 1 }),
];

export const listValidation = [
  query('page').optional().isInt({ min: 1 }).withMessage('El parámetro "page" debe ser un número entero positivo.'),
  query('limit').optional().isInt({ min: 1 }).withMessage('El parámetro "limit" debe ser un número entero positivo.'),
  query('order').optional().isString().withMessage('El parámetro "order" debe ser una cadena de caracteres.'),
  query('search').optional().isString().withMessage('El parámetro "search" debe ser una cadena de caracteres.'),
];
