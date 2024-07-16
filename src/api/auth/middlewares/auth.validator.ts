import { allValidator } from '../../../shared/express.validator'
import { body, header } from 'express-validator'
import {validateToken } from '../validator/auth.custom'

export const signinValidator = [
  body('email')
    .isEmail()
    .withMessage('Ingrese su correo.'),
  body('password')
    .isString()
    .withMessage('Ingrese su contraseña.'),
  allValidator,
]

export const signoutValidator = [
  header('authorization')
    .isString()
    .withMessage('Se require un string')
    .bail()
    .not()
    .isEmpty()
    .withMessage('No puede ser vacio')
    .bail()
    .custom(validateToken),
  allValidator,
]



