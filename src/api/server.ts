import express, { Application, Response, Request, NextFunction } from 'express'
import { router as routerAuth } from './auth/routes/auth.routes'
import { router as routerUser } from './user/routes/user.routes'
import { router as routerClient } from './client/routes/client.routes'
import { router as routerService } from './service/routes/service.routes'
import { router as routerExpense } from './expense/routes/expense.routes'
import { router as routerTicket } from './ticket/routes/ticket.routes'
import passportMiddleware from '../api/auth/passport/passport'
import passport from 'passport'
import morgan from 'morgan'
import cors from 'cors'
import { Router } from 'express'
import { authenticateToken } from './auth/custom/token.custom' 

export default class Server {
  private _app: Application
  private _port: number
  private _router: Router
  constructor(port: number) {
    this._app = express()
    this._router = Router()
    this._port = port
    this.middlewares()
    this.routes()
    this.errors()
  }

  static init(port: number): Server {
    return new Server(port)
  }
  middlewares(): void {
    this._app.use(cors({ credentials: true }))
    this._app.use(morgan('dev'))
    this._app.use(express.json({ limit: '350mb' }))
    this._app.use(
      express.urlencoded({
        limit: '350mb',
        extended: true,
        parameterLimit: 350000,
      })
    )

    this._router.use(passport.initialize())
    passport.use(passportMiddleware)
  }
  routes(): void {
    this._app.use('/api', this._router)
    this._router.use('/login', routerAuth)

    //*@AUTHENTICATE
    this._router.use(authenticateToken);
    this._router.use('/user', routerUser)
    this._router.use('/client', routerClient)
    this._router.use('/service', routerService)
    this._router.use('/expense', routerExpense)
    this._router.use('/ticket', routerTicket)

  }

  errors(): void {
    this._router.use((req: Request, res: Response, next) => {
      const err = new Error(`Not Fount - ${req.originalUrl}`)
      res.status(404)
      next(err)
    })
    this._router.use((err: any, req: Request, res: Response, next: NextFunction) => {
      console.log(err.stack)
      res.status(err.status || 500).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
      })
    })
  }

  start(callback: () => void): void {
    this._app.listen(this._port, callback)
  }
}
