import { Router } from 'express';
import { allValidator } from '../../../shared/express.validator';
import {
  addExpenseController,
  findExpenseByIdController,
  getExpensesController,
  toggleExpenseStatusController,
  updateExpenseController
} from '../controllers/expense.controller';
import { expenseIdValidation, listValidation, updateExpenseValidation } from '../middleware/expense.validator';

export const router: Router = Router();

// Ruta para agregar un gasto
router.post('/', allValidator, addExpenseController);

// Ruta para actualizar un gasto por su ID
router.put('/:expense_id', expenseIdValidation, updateExpenseValidation, allValidator, updateExpenseController);

// Ruta para cambiar el estado de un gasto por su ID (activar/desactivar)
router.delete('/:expense_id', expenseIdValidation, updateExpenseValidation, allValidator, toggleExpenseStatusController);

// Ruta para obtener un gasto por su ID
router.get('/:expense_id', expenseIdValidation, allValidator, findExpenseByIdController);

// Ruta para obtener todos los gastos
router.get('/', listValidation, allValidator, getExpensesController);
