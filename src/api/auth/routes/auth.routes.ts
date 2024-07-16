import { Router } from 'express'
import {signInController,signOutController} from '../controllers/auth.controller'
import { signinValidator, signoutValidator} from '../middlewares/auth.validator'

export const router: Router = Router()
router.post('/signin', signinValidator, signInController)
router.get('/signout', signoutValidator, signOutController)
