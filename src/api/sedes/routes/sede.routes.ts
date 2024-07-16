import {Router} from 'express'
import { createSedeController, searchSedeByIdController, sedesController, updateSedeController } from '../controllers/sede.controllers'
import { IdValidator, addSedeValidator, deleteSedebValidator, updateSedeValidator } from '../middlewares/middlewares'
export const router: Router = Router()

router.post('/sede',addSedeValidator,createSedeController)
router.put('/sede/:id',updateSedeValidator,updateSedeController)
// router.delete('/sede/:id',deleteSedebValidator,disableEnabledSedeController)

router.get('/sede/list',sedesController)
// router.get('/sede/list/:id',IdValidator,sedeByCompanyController)
router.get('/sede/:id',IdValidator,searchSedeByIdController)