import { body, param } from 'express-validator'
import { allValidator } from '../../../shared/express.validator'
// import { existsCompany } from '../custom/custom'

export const addSedeValidator = [
  body('name')
    .isString()
    .withMessage('Se requiere una cadena de texto')
    .notEmpty()
    .withMessage('No puede ser vacio'),
    body('location')
    .isString()
    .withMessage('Se requiere una cadena de texto')
    .notEmpty()
    .withMessage('No puede ser vacio'),
    body('company_id')
    .isNumeric()
    .withMessage('Se requiere un numero')
    .notEmpty()
    .withMessage('No puede ser vacio'),
    // .custom(existsCompany),

  allValidator,
]
export const updateSedeValidator = [
    body('name')
      .isString()
      .withMessage('Se requiere una cadena de texto')
      .notEmpty()
      .withMessage('No puede ser vacio')
      .optional(),

      body('location')
      .isString()
      .withMessage('Se requiere una cadena de texto')
      .notEmpty()
      .withMessage('No puede ser vacio')
      .optional(),
        
    allValidator,
  ]
export const deleteSedebValidator = [
    body('state')
      .notEmpty()
      .withMessage('no puede estar vacio')
      .isBoolean()
      .withMessage('tiene que ser un boolean')
      .isIn([false, true])
      .withMessage('tiene que ser un boolean  false o true'),
  
    param('id')
      .isNumeric()
      .withMessage('Se requiere  numero')
      .notEmpty()
      .withMessage('No puede ser vacio'),
  
    allValidator,
  ]
  export const IdValidator = [
    param('id')
      .isNumeric()
      .withMessage('Se requiere un numero')
      .notEmpty()
      .withMessage('No puede ser vacio'),
  
    allValidator,
  ]