import { actualizarNumIntentos, bloqueoUsuario, bloqueoUsuarioTemporal, updatePasswordUser } from './update/ticket.update'
import { UserAttributes } from '../models/user.model'
import {
  //  sendEmail,
  sendMailAxios,
} from '../../../utils/generate.mail'
// import { createUser } from './create'
import { template_create_admin, template_create_user } from '../../../templates/templates'
import CryptoJS from 'crypto-js'
import config from '../../../config/environments/index'

export const validateStatusUser = ({
  estado,
  horaBloqueo,
  cantidadMinBloqueo,
}: {
  estado: string | undefined
  horaBloqueo: Date | undefined
  cantidadMinBloqueo: number | undefined
}): boolean => {
  if (estado == 'H') {
    return true
  } else if (estado == 'BIT') {
    var horaBloqueoDato = new Date(horaBloqueo!)
    new Date(horaBloqueoDato.setTime(Number(horaBloqueoDato.getTime() + 60000 * cantidadMinBloqueo!)))
    if (horaBloqueoDato >= new Date()) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}
export const amountIntUser = async ({
  userId,
  cantidadMinBloq,
  numIntentos,
}: {
  userId?: number
  cantidadMinBloq?: number
  numIntentos?: number
}) => {
  try {
    let minPrimerBloqueo: number = 5 //*MINUTOS
    let minsegundoBloqueo: number = 10 //*MINUTOS
    let bloquearUser: boolean = false
    let cantminBloqueo: number
    // const user = await this.oneUserByIdError(userId)
    if (numIntentos! < 3) {
      await actualizarNumIntentos({
        numIntentos: numIntentos! + 1,
        userId,
      })
    }
    if (numIntentos == 2) {
      switch (cantidadMinBloq) {
        case null:
          cantminBloqueo = minPrimerBloqueo
          break
        case minPrimerBloqueo:
          cantminBloqueo = minsegundoBloqueo
          break
        case minsegundoBloqueo:
          bloquearUser = true
          break
      }
      if (bloquearUser) {
        await bloqueoUsuario({ userId })
      } else {
        await bloqueoUsuarioTemporal({
          cantminutos: cantminBloqueo!,
          userId,
        })
      }
    }
    return
  } catch (err) {
    throw err
  }
}

// export const createUserAndSendMail = async (user: UserAttributes) => {
//   try {
//     const _user: UserAttributes = await createUser(user)
//     return await sendMailAxios({
//       template: template_create_user({
//         names: _user.name + ' ' + _user.lastname,
//         banner:
//           'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//       }),
//       title: '[MIYUNTA]  Bienvenido al Sistema de Bryan Dev',
//       to: _user.email!,
//     })
//   } catch (err) {
//     throw err
//   }
// }

// export const createUserAndSendCodeVerificationToMail = async (user: UserAttributes) => {
//   try {

//     const _user: UserAttributes = await createUser(user)
//     return await sendMailAxios({
//       template: template_create_user({
//         names: _user.name + ' ' + _user.lastname,
//         code:user.code_verification,
//         banner:
//           'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//       }),
//       // title: `[MIYUNTA] Bienvenido , este es tu código de verificación ${user.code_verification}`,
//       title:`[MIYUNTA] Código de verificación`,

//       to: _user.email!,
//     })
//   } catch (err) {
//     throw err
//   }
// }
export const createUserAndSendMailService = async ({
  user,
  created_by,
}: {
  user: UserAttributes
  created_by: number
}) => {
  try {
    // const { password, ...user_details }: UserAttributes = await createUser({
    //   user,
    //   created_by,
    // })
    //  await sendMailAxios({
    //   title: 'Hola ' + user_details.name ,
    //   to: user_details.email!,
     
    //   template: template_create_admin({
    //     names: user_details.name + ' ' + user_details.lastname_p + ' ' + user_details.lastname_m,
    //     redirect_buttom:config.PROY_FEURL,
    //     password: password,
    //     url_log:config.URL_LOGO,
    //     banner:
    //       'https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   }),
    // }) 
    return { user: "user_details" }
  } catch (err) {
    throw err
  }
}
export const updatePasswordUserService = async (new_password: string, userId: number) => {
  try {
    const salt = CryptoJS.lib.WordArray.random(30)
    const hashpwd = CryptoJS.PBKDF2(new_password!, salt.toString(), {
      iterations: 10000,
      keySize: 10,
    })

    return await updatePasswordUser({
      where: {
        id: userId,
      },
      // updated_by:userId,
      password: hashpwd.toString(),
      salt: salt.toString(),
    })
  } catch (err) {
    throw err
  }
}

// export const createNewUser = async (user: UserAttributes) => {
//   try{
//     // const _user: UserAttributes = await createUser(user)
//     return await createUser(user)
//   }catch (err) {
//     throw err
//   }
// }
