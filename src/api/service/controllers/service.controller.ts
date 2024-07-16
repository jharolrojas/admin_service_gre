import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import sequelize from 'sequelize';
import { IToken } from '../../auth/interfaz/auth.interfaz';
import { ServiceAttributes } from '../models/service.model';
import { createService } from '../services/create/service.create';
import { updateService } from '../services/update/service.update';
import { toggleServiceStatusService } from '../services/delete/service.delete';
import { findServiceByIdService, getService } from '../services/find/service.find';
import ApiResponse from '../../../utils/response.ts/response';


export const addServiceController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const {
    name,
    level_id,
    description,
  } = req.body as ServiceAttributes;

  try {
    const newService = await createService({
      name,
      level_id,
      description,
      updated_by: +userId,
    });
    ApiResponse.success(res, newService);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const updateServiceController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const {
    name,
    level_id,
    description,
  } = req.body as ServiceAttributes;

  const { service_id } = req.params;

  try {
    const updatedService = await updateService({
      where: { id: +service_id }, payload: {
        name,
        level_id,
        description,
        updated_by: +userId,
      }
    });
    ApiResponse.success(res, updatedService);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const toggleServiceStatusController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const { status } = req.body as ServiceAttributes;
  const { service_id } = req.params;

  if (status === undefined)
    return res.status(200).json({ message: "Debe enviar un valor lógico en estado.", service: [0] });
  try {
    const updatedService = await toggleServiceStatusService({ where: { id: +service_id }, payload: { status, updated_by: +userId } });

    const message = status ? 'Servicio habilitado correctamente' : 'Servicio deshabilitado correctamente';
    
    ApiResponse.success(res, updatedService,message);
    
  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const findServiceByIdController = async (req: Request, res: Response, next: NextFunction) => {
  const { service_id } = req.params;

  try {
    const service = await findServiceByIdService({ where: { id: service_id } });

    if (!service) {
      return next(createError(404, 'Servicio no encontrado'));
    }
    ApiResponse.success(res, service);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const getServicesController = async (req: Request, res: Response, next: NextFunction) => {
  const { page, limit, order, search } = req.query;

  try {
    const services = await getService({
      page: +(page || 1),
      limit: +(limit || 50),
      order: (order || "desc").toString(),
      search: (search || "")?.toString(),
    });
    
    ApiResponse.success(res, services);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};
