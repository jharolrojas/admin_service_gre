import { NextFunction, Request, Response } from 'express'
import createError from 'http-errors'
import Sequelize from 'sequelize'
import { createSedeService } from '../services/create'
import { updateSedeService } from '../services/update'
// import { disabledEnabledSede } from '../services/delete'
import {  sedeById, sedes } from '../services/find'
import { IToken } from '../../auth/interfaz/auth.interfaz'

export const createSedeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.user as IToken
    const { name, location, company_id } = req.body

    const sede = await createSedeService({
      name,
      location,
      company_id,
      created_by: userId,
    })

    if (!sede) {
      return res.status(400).json({ data: { message: 'sede no creada.' } })
    }

    res.status(200).json(sede)
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err))
    next(createError(404, err))
  }
}
export const updateSedeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.user as IToken
    const { name, location } = req.body
    const { id } = req.params

    const sede: any = await updateSedeService({
      sede: {
        name,
        location,
        created_by: userId,
      },
      where: {
        id: Number(id),
      },
    })

    if (sede && sede[0] === 0) {
      return res.status(400).json({ data: { message: 'fallo solicitud' } })
    }

    res.status(200).json({ data: { message: 'Se actualizo' } })
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err))
    next(createError(404, err))
  }
}
// export const disableEnabledSedeController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { userId } = req.user as IToken
//     const { id } = req.params
//     const { state } = req.body
//     const verifyDisable = await disabledEnabledSede({
//       where: {
//         id: Number(id),
//       },
//       updated_by: Number(userId),
//       state,
//     })
//     if (verifyDisable && verifyDisable[0] === 0) {
//       return res.status(400).json({ data: { message: 'fallo solicitud' } })
//     }
//     state
//       ? res.status(200).json({ data: { message: 'Se habilito correctamente' } })
//       : res.status(200).json({ data: { message: 'Se deshabilito correctamente' } })
//   } catch (err: any) {
//     if (err instanceof Sequelize.ValidationError) next(createError(400, err))
//     next(createError(404, err))
//   }
// }

export const searchSedeByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const list = await sedeById(Number(id))
    res.status(200).json(list || [])
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err))
    next(createError(404, err))
  }
}
// export const sedeByCompanyController = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params
//     const list = await sedeByCompany({ where: { company_id: Number(id), state: true } })
//     res.status(200).json(list || [])
//   } catch (err: any) {
//     if (err instanceof Sequelize.ValidationError) next(createError(400, err))
//     next(createError(404, err))
//   }
// }

export const sedesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await sedes({ where: { state: true } })
    res.status(200).json(list || [])
  } catch (err: any) {
    if (err instanceof Sequelize.ValidationError) next(createError(400, err))
    next(createError(404, err))
  }
}
