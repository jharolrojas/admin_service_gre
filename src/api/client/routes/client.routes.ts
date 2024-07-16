import { Router } from 'express'
import { allValidator } from '../../../shared/express.validator'
import { addClientController, findClientByIdController, getClientsController, toggleClientStatusController, updateClientController } from '../controllers/client.controller'
import { clientIdValidation, listValidation, updateClientValidation, validateClient } from '../middleware/client.validator'

export const router: Router = Router()
router.post('/', validateClient, allValidator, addClientController)
router.put('/:client_id', clientIdValidation, updateClientValidation, allValidator, updateClientController)
router.delete('/:client_id', clientIdValidation, updateClientValidation, allValidator, toggleClientStatusController)
router.get('/:client_id', clientIdValidation, allValidator, findClientByIdController)
router.get('/', listValidation, allValidator, getClientsController)
