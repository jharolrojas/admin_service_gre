import { body, param, ValidationChain, query } from 'express-validator';
export const addTicketValidation: ValidationChain[] = [
  body('client_id').notEmpty().withMessage('El ID del cliente es requerido'),
  body('service_id').isArray().withMessage('Se requiere una colección de indetificadores.'),
  body('technical_id').isNumeric().withMessage('El ID del técnico debe ser un número'),
  body('hour').notEmpty().withMessage('La hora es requerida'),
  body('date').isISO8601().withMessage('La fecha debe tener un formato válido (YYYY-MM-DD)'),
  body('how_long').optional().isString().withMessage('La duración debe ser una cadena de caracteres'),
  body('service_status_id').isString().withMessage('El ID debe ser un código único'),
  body('amount').isNumeric().optional().withMessage('El monto debe ser un número'),
  body('status_payment_id').optional().isString().withMessage('El ID debe ser un código único'),
  body('type_payment_id').optional().isString().withMessage('El ID debe ser un código único'),
];

export const updateTicketValidation: ValidationChain[] = [
  body('client_id').optional().notEmpty().withMessage('El ID del cliente es requerido'),
  body('service_id').optional().isArray().withMessage('Se requiere una colección de indetificadores.'),
  body('technical_id').optional().isNumeric().withMessage('El ID del técnico debe ser un número'),
  body('hour').optional().notEmpty().withMessage('La hora es requerida'),
  body('date').optional().isISO8601().withMessage('La fecha debe tener un formato válido (YYYY-MM-DD)'),
  body('how_long').optional().isString().withMessage('La duración debe ser una cadena de caracteres'),
  body('service_status_id').optional().isString().withMessage('El ID debe ser un código único'),
  body('amount').optional().isNumeric().withMessage('El monto debe ser un número'),
  body('status_payment_id').optional().isString().withMessage('El ID debe ser un código único'),
  body('type_payment_id').optional().isString().withMessage('El ID debe ser un código único'),
  body('status').optional().isBoolean().withMessage('El estado debe ser un valor booleano'),
];

export const ticketIdValidation: ValidationChain[] = [
  param('ticket_id').isNumeric().withMessage('El ID del ticket debe ser un número entero positivo').isInt({ min: 1 }),
];

export const listValidation: ValidationChain[] = [
  query('page').isInt({ min: 1 }).withMessage('El parámetro "page" debe ser un número entero positivo'),
  query('limit').isInt({ min: 1 }).withMessage('El parámetro "limit" debe ser un número entero positivo'),
  query('order').isString().withMessage('El parámetro "order" debe ser una cadena de caracteres'),
  query('search').optional().isString().withMessage('El parámetro "search" debe ser una cadena de caracteres'),
];
