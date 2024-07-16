import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import sequelize from 'sequelize';
import { IToken } from '../../auth/interfaz/auth.interfaz';
import { TicketAttributes } from '../models/ticket.model';
import { createTicketService } from '../services/create/ticket.create';
import { findTicketByIdService, getTicketsService } from '../services/find/ticket.find';
import { toggleTicketStatusService } from '../services/delete/ticket.delete';
import { updateTicketService } from '../services/update/ticket.update';
import ApiResponse from '../../../utils/response.ts/response';

export const addTicketController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const {
    client_id,
    service_id,
    technical_id,
    hour,
    date,
    how_long,
    service_status_id,
    amount,
    status_payment_id,
    type_payment_id,
    description
  } = req.body as TicketAttributes;

  try {
    const newTicket = await createTicketService({
      client_id,
      service_id,
      technical_id,
      hour,
      date,
      how_long,
      service_status_id,
      amount,
      status_payment_id,
      type_payment_id,
      created_by: +userId,
      description
    });
    ApiResponse.success(res, newTicket);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const updateTicketController = async (req: Request, res: Response, next: NextFunction) => {

  const { userId } = req.user as IToken;
  const {
    client_id,
    service_id,
    technical_id,
    hour,
    date,
    how_long,
    service_status_id,
    amount,
    status_payment_id,
    type_payment_id,
    description
  } = req.body as TicketAttributes;

  const { ticket_id } = req.params;

  try {
    const updatedTicket = await updateTicketService({
      where: { id: +ticket_id }, payload: {
        client_id,
        service_id,
        technical_id,
        hour,
        date,
        how_long,
        service_status_id,
        amount,
        status_payment_id,
        type_payment_id,
        updated_by: +userId,
        description
      }
    });
    ApiResponse.success(res, updatedTicket);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const toggleTicketStatusController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const { status } = req.body as TicketAttributes;
  const { ticket_id } = req.params;

  if (status === undefined)
    return res.status(200).json({ message: "Debe enviar un valor logico en estado.", ticket: [0] });
  try {
    const updatedTicket = await toggleTicketStatusService({ where: { id: +ticket_id }, payload: { status, updated_by: +userId } });

    const message = status ? 'Ticket habilitado correctamente' : 'Ticket deshabilitado correctamente';

    ApiResponse.success(res, updatedTicket, message);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const findTicketByIdController = async (req: Request, res: Response, next: NextFunction) => {
  const { ticket_id } = req.params;

  try {
    const ticket = await findTicketByIdService({ where: { id: ticket_id } });

    if (!ticket) {
      return next(createError(404, 'Ticket no encontrado'));
    }

    ApiResponse.success(res, ticket);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const getTicketsController = async (req: Request, res: Response, next: NextFunction) => {
  const { page, limit, order, search } = req.query;

  try {
    const tickets = await getTicketsService({
      page: +(page || 1),
      limit: +(limit || 50),
      order: (order || "desc").toString(),
      search: (search || "")?.toString(),
    });
    ApiResponse.success(res, tickets);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};
