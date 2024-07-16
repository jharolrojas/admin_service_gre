import { Router } from 'express';
import { allValidator } from '../../../shared/express.validator';
import { addTicketValidation, ticketIdValidation, listValidation, updateTicketValidation } from '../middleware/ticket.validator';
import { addTicketController, findTicketByIdController, getTicketsController, toggleTicketStatusController, updateTicketController } from '../controllers/ticket.controller';

export const router: Router = Router();
router.post('/', addTicketValidation, allValidator, addTicketController);
router.put('/:ticket_id', ticketIdValidation, updateTicketValidation, allValidator, updateTicketController);
router.delete('/:ticket_id', ticketIdValidation, updateTicketValidation, allValidator, toggleTicketStatusController);
router.get('/:ticket_id', ticketIdValidation, allValidator, findTicketByIdController);
router.get('/', listValidation, allValidator, getTicketsController);
