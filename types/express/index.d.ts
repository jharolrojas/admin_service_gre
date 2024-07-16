import { IToken } from '../../src/api/auth/passport/passport'
declare namespace Express {
  interface Request {
    path: string
    user: IToken
  }
}
