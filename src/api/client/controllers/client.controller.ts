import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import sequelize from 'sequelize';
import { IToken } from '../../auth/interfaz/auth.interfaz';
import { ClientAttributes } from '../models/client.model';
import { createClientService } from '../services/create/client.create';
import { findClientByIdService, getClientService } from '../services/find/client.find';
import { toggleClientStatusService } from '../services/delete/client.delete';
import { updateClientService } from '../services/update/client.update';
import ApiResponse from '../../../utils/response.ts/response';

export const addClientController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const {
    // name_p,
    // name_s,
    // lastname_m,
    // lastname_p,
    // number_document,
    // type_document_id,
    // email,
    gender_id,
    number_phone_1,
    // number_phone_2,
    address,
    // birthdate,
    full_lastname,
    full_name
  } = req.body as ClientAttributes;


  try {
    const newClient = await createClientService({
      // name_p,
      // name_s,
      // lastname_m,
      // lastname_p,
      // number_document,
      // type_document_id,
      // email,
      gender_id,
      number_phone_1,
      // number_phone_2,
      address,
      // birthdate,
      full_lastname,
      full_name,
      created_by: +userId,
    });
    ApiResponse.success(res, newClient);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const updateClientController = async (req: Request, res: Response, next: NextFunction) => {

  const { userId } = req.user as IToken;
  const {
    // name_p,
    // name_s,
    // lastname_m,
    // lastname_p,
    // number_document,
    // type_document_id,
    // email,
    gender_id,
    number_phone_1,
    // number_phone_2,
    address,
    // birthdate,
    full_lastname,
    full_name
  } = req.body as ClientAttributes;

  const { client_id } = req.params;

  try {
    const updatedClient = await updateClientService({
      where: { id: +client_id }, payload: {
        // name_p,
        // name_s,
        // lastname_m,
        // lastname_p,
        // number_document,
        // type_document_id,
        // email,
        gender_id,
        number_phone_1,
        // number_phone_2,
        address,
        // birthdate,
        full_lastname:(full_lastname || ""),
        full_name,
        updated_by: +userId
      }
    });
    ApiResponse.success(res, updatedClient);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const toggleClientStatusController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const { status } = req.body as ClientAttributes;
  const { client_id } = req.params;

  if (status === undefined)
    return res.status(200).json({ message: "Debe enviar un valor logico en estado.", client: [0] });
  try {
    const updatedClient = await toggleClientStatusService({ where: { id: +client_id }, payload: { status, updated_by: +userId } });

    const message = status ? 'Cliente habilitado correctamente' : 'Cliente deshabilitado correctamente';
    
    ApiResponse.success(res, updatedClient,message);
    
  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const findClientByIdController = async (req: Request, res: Response, next: NextFunction) => {
  const { client_id } = req.params;

  try {
    const client = await findClientByIdService({ where: { id: client_id } });

    if (!client) {
      return next(createError(404, 'Cliente no encontrado'));
    }
    ApiResponse.success(res, client);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const getClientsController = async (req: Request, res: Response, next: NextFunction) => {
  const { page, limit, order, search } = req.query;

  try {
    const clients = await getClientService({
      page: +(page || 1),
      limit: +(limit || 50),
      order: (order || "desc").toString(),
      search: (search || "")?.toString(),
    });
    
    ApiResponse.success(res, clients);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};
