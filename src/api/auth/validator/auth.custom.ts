import { Request } from 'express'
import config from '../../../config/environments/index'
import { TokenAttributes } from '../../token/models/token.model'
import { findTokenByUUID } from '../../token/services/find'
import jwt from 'jsonwebtoken'

export const validateToken = async (authorization: string, { req }: { req: Request | any }): Promise<void> => {
  
  const opts = {
    secretOrKey: config.SECRET_HIDDEN_KEY,
  }
  
  if(!authorization.includes('Bearer '))throw new Error("Se requiere el formato: Bearer ")
  let extractToken = authorization.split('Bearer ')[1] 
  const data_values:any = await new Promise((resolve,reject)=>{
    jwt.verify(extractToken as string,opts.secretOrKey as string,(err,data)=>{
      if(err) reject('Token invalido')
      resolve(data)
    })
  })
  
  const token: TokenAttributes = await findTokenByUUID({ uuid: data_values?._id })
  if(!token)throw new Error('Token no utilizable o no activo')
}
