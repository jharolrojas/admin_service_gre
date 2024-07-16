import { NextFunction, query, Request, Response } from 'express';
import createError from 'http-errors';
import sequelize from 'sequelize';
import { GeneralVariablesAttributes } from '../models/general.variables.model';
import { createGeneralVariables } from '../services/create/general.variables';
import {
  findGeneralVariablesByIdCode,
  getListGeneralVariablesService,
} from '../services/find/general.variables';
import { updateGeneralVariables } from '../services/update/general.variables';
import { IToken } from '../../auth/interfaz/auth.interfaz';
import ApiResponse from '../../../utils/response.ts/response';

export const createGeneralVariablesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.user as IToken;

    const { value, description, ref1, ref2, ref3, ref4 } = req.body as GeneralVariablesAttributes;

    const generalVariables = await createGeneralVariables({
      value,
      description,
      ref1,
      ref2,
      ref3,
      ref4,
      created_by: +userId,
    });

    if (!generalVariables) {
      return next(createError(404, 'Variable no creada'));

    }

    ApiResponse.success(res, generalVariables);
    
  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) next(createError(400, err));
    next(createError(404, err));
  }
};

export const getListGeneralVariablesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { page, limit, order, search } = req.query
    const generalVariables = await getListGeneralVariablesService({
      order: (order || "DESC").toString(),
      page: Number(page) || 1,
      limit: Number(limit) || 10000,
      search: (search || "").toString()
    });

    ApiResponse.success(res, generalVariables);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};

export const findGeneralVariablesByIdCodeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id_code }: any = req.params;

    const generalVariables = await findGeneralVariablesByIdCode({
      id_code
    });
    ApiResponse.success(res, generalVariables);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};

export const updateGeneralVariablesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.user as IToken;
    const { value, id_code, description, ref1, ref2, ref3, ref4 } = req.body as GeneralVariablesAttributes;
    const codeUpdate = await updateGeneralVariables({
      where: { id_code },
      payload: {
        value,
        id_code,
        description,
        ref1,
        ref2,
        ref3,
        ref4,
        updated_by: +userId,
      },
    });
    if (codeUpdate && codeUpdate[0] === 0) {
      return next(createError(404, 'Código no actualizado'));

    }
    ApiResponse.success(res, codeUpdate,'Se actualizó correctamente');

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};

export const toggleGeneralVariablesStatusController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.user as IToken;
    const { status } = req.body as GeneralVariablesAttributes;
    const { id_code } = req.params;
    const codeUpdate = await updateGeneralVariables(
      {
      where: { id_code },
      payload: {
      status,
      updated_by: +userId,
      },
    }
  );
    if (codeUpdate && codeUpdate[0] === 0) {
      return next(createError(404, 'Código no actualizado'));
    }

    ApiResponse.success(res, codeUpdate,status ? 'Se actualizó correctamente':'Se deshabilitó correctamente');
    
  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) next(createError(400, err));

    next(createError(404, err));
  }
};
