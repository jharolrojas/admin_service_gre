import CryptoJS from 'crypto-js';
import { UserAttributes } from '../../models/user.model';
import { DataBase } from '../../../../database';
import { momentCustom } from '../../../../utils/moment';

export const createUserService = async ({
  name_p,
  name_s,
  lastname_m,
  lastname_p,
  number_document,
  type_document_id,
  email,
  gender_id,
  number_phone_1,
  number_phone_2,
  address,
  birthdate,
  salary,
  level_id,
  rol_id,
  password,
  created_by,
}: UserAttributes) => {
  try {
    // Generar una sal aleatoria y encriptar la contraseña
    const salt = CryptoJS.lib.WordArray.random(30);
    const hashpwd = CryptoJS.PBKDF2(password!, salt.toString(), {
      iterations: 10000,
      keySize: 10,
    });

    // Crear el nuevo usuario en la base de datos
    const newUser = await DataBase.instance.user.create({
      name_p,
      name_s,
      lastname_m,
      lastname_p,
      number_document,
      type_document_id,
      email,
      gender_id,
      number_phone_1,
      number_phone_2,
      address,
      birthdate,
      salary,
      level_id,
      rol_id,
      state: true, // Estado por defecto al crear el usuario
      password: hashpwd.toString(),
      salt: salt.toString(),
      created_by,
      created_date: momentCustom,
    });

    // Se retornar el usuario creado
    return newUser;
  } catch (err) {
    throw err;
  }
};
