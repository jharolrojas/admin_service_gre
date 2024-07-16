import sequelize from 'sequelize'
import createError from 'http-errors'
import { NextFunction, Request, Response } from 'express'
import { signInService } from '../../token/services/token.service'
import { TokenAttributes } from '../../token/models/token.model'
import { findTokenByUUID } from '../../token/services/find'
import { closeAllSession } from '../../token/services/update'
import config from '../../../config/environments/index'
import jwt from 'jsonwebtoken'
import { ISignIn } from '../interfaz/auth.interfaz'
import ApiResponse from '../../../utils/response.ts/response'

export const signInController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body as ISignIn

    const jwt = await signInService({ email, password })
    ApiResponse.success(res, jwt)
  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) next(createError(400, err))
    next(createError(404, err))
  }
}

export const signOutController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const opts = {
      secretOrKey: config.SECRET_HIDDEN_KEY,
    }
    const extractToken = req.headers.authorization?.split(' ')[1]

    const data_values: any = await new Promise((resolve, reject) => {
      jwt.verify(extractToken as string, opts.secretOrKey as string, (err, data) => {
        if (err) reject(err)
        resolve(data)
      })
    })
    const token: TokenAttributes = await findTokenByUUID({ uuid: data_values?._id })

    await closeAllSession({ userId: token.userId as number, rol: token.rol as number })
    ApiResponse.success(res, { signout: true })
  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) next(createError(400, err))
    next(createError(404, err))
  }
}

