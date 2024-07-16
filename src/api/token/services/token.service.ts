import jwt from 'jsonwebtoken';
import config from '../../../config/environments';
import createError from 'http-errors';
import CryptoJS from 'crypto-js';
import { closeAllSession } from './update';
import { createToken } from './create';
import { UserAttributes } from '../../user/models/user.model';
import { findUserWhereService } from '../../user/services/find/user.find';

export const signInService = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ JWT: string } | { message: string; state: false }> => {
  try {
    // Buscar usuario por email
    const user: UserAttributes | null = await findUserWhereService({where:{email,state:true}});

    if (!user) {
      throw createError(401, 'El correo electrónico que ingresaste no está conectado a una cuenta');
    }

    // Validar la contraseña
    const isValidPassword = validatePassword({
      password,
      salt: user.salt!,
      hashedPass: user.password!,
    });

    if (isValidPassword) {
      // Cerrar todas las sesiones existentes del usuario
      await closeAllSession({ userId: user.id!, rol: +user.rol_id! });

      // Crear un nuevo token para el usuario
      const token = await createToken({
        userId: user.id,
        rol: +user.rol_id!,
      });

      // Firmar el token JWT
      const jwtToken = jwt.sign({ _id: token.uuid ,userId:user.id!, rol: user.rol_id!}, config.SECRET_HIDDEN_KEY!, { expiresIn: '24h' });

      return { JWT: jwtToken };
    } else {
      return { message: 'Credenciales incorrectas por favor verifique y vuelva a intentar.', state: false };
    }
  } catch (err) {
    throw err; // Propagar el error para manejo superior
  }
};

// Función para validar la contraseña
const validatePassword = ({
  password,
  salt,
  hashedPass,
}: {
  password: string;
  salt: string;
  hashedPass: string;
}): boolean => {
  const testHash = CryptoJS.PBKDF2(password, salt, {
    iterations: 10000,
    keySize: 10,
  }).toString();

  return testHash === hashedPass;
};
