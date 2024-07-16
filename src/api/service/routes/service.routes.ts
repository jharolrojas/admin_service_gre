import { Router } from 'express'
import { allValidator } from '../../../shared/express.validator'
import { addServiceController, findServiceByIdController, getServicesController, toggleServiceStatusController, updateServiceController } from '../controllers/service.controller'
import { addServiceValidation, listValidation, serviceIdValidation, updateServiceValidation } from '../middleware/service.validator'

export const router: Router = Router()
router.post('/', addServiceValidation, allValidator, addServiceController)
router.put('/:service_id',serviceIdValidation, updateServiceValidation, allValidator, updateServiceController)
router.delete('/:service_id',serviceIdValidation, updateServiceValidation, allValidator, toggleServiceStatusController)
router.get('/:service_id',serviceIdValidation, allValidator, findServiceByIdController)
router.get('/', listValidation, allValidator, getServicesController)
