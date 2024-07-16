import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import sequelize from 'sequelize';
import { IToken } from '../../auth/interfaz/auth.interfaz';
import { createExpenseService } from '../services/create/expense.create';
import { findExpenseByIdService, getExpenseService } from '../services/find/expense.find';
import { toggleExpenseStatusService } from '../services/delete/expense.delete';
import { updateExpenseService } from '../services/update/expense.update';
import { ExpenseAttributes } from '../models/expense.models';
import ApiResponse from '../../../utils/response.ts/response';

export const addExpenseController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const {
    type_coin_id,
    type_expense_id,
    type_payment_id,
    expense_for_id,
    description,
    amount,
  } = req.body as ExpenseAttributes;

  try {
    const newExpense = await createExpenseService({
      type_coin_id,
      type_expense_id,
      type_payment_id,
      expense_for_id,
      description,
      amount,
      updated_by: +userId,
    });
    ApiResponse.success(res, newExpense);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const updateExpenseController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const {
    type_coin_id,
    type_expense_id,
    type_payment_id,
    expense_for_id,
    description,
    amount,
    status,
  } = req.body as ExpenseAttributes;

  const { expense_id } = req.params;

  try {
    const updatedExpense = await updateExpenseService({
      where: { id: +expense_id },
      payload: {
        type_coin_id,
        type_expense_id,
        type_payment_id,
        expense_for_id,
        description,
        amount,
        status,
        updated_by: +userId,
      },
    });

    ApiResponse.success(res, updatedExpense);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const toggleExpenseStatusController = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user as IToken;
  const { status } = req.body as ExpenseAttributes;
  const { expense_id } = req.params;

  if (status === undefined)
    return res.status(200).json({ message: "Debe enviar un valor lógico en estado.", expense: [0] });
  try {
    const updatedExpense = await toggleExpenseStatusService({
      where: { id: +expense_id },
      payload: { status, updated_by: +userId },
    });

    const message = status ? 'Gasto activado correctamente' : 'Gasto desactivado correctamente';

    ApiResponse.success(res, updatedExpense, message);
  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const findExpenseByIdController = async (req: Request, res: Response, next: NextFunction) => {
  const { expense_id } = req.params;

  try {
    const expense = await findExpenseByIdService({ where: { id: expense_id } });

    if (!expense) {
      return next(createError(404, 'Gasto no encontrado'));
    }
    ApiResponse.success(res, expense);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};

export const getExpensesController = async (req: Request, res: Response, next: NextFunction) => {
  const { page, limit, order, search } = req.query;

  try {
    const expenses = await getExpenseService({
      page: +(page || 1),
      limit: +(limit || 50),
      order: (order || "desc").toString(),
      search: (search || "")?.toString(),
    });
    
    ApiResponse.success(res, expenses);

  } catch (err: any) {
    if (err instanceof sequelize.ValidationError) {
      return next(createError(400, err));
    }
    next(createError(500, err));
  }
};
