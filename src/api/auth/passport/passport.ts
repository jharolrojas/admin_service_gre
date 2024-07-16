import config from '../../../config/environments/index'
import moment from 'moment'
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import { findTokenByUUID } from '../../token/services/find'
import { TokenAttributes } from '../../token/models/token.model'
import { updateToken } from '../../token/services/update'
import { JwtPayload } from '../interfaz/auth.interfaz'
import { momentCustom } from '../../../utils/moment'

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET_HIDDEN_KEY,
}
export default new Strategy(opts, async (payload: JwtPayload, done) => {
  try {
    const token: TokenAttributes = await findTokenByUUID({ uuid: payload._id })
    
    if (!token) return done(null, false)

    if (
      !moment(moment(token.last_petition).utc().add(12, 'hour')).isSameOrAfter(moment.utc()) &&
      token.rol == 1
    ) {
      await updateToken({
        uuid: payload._id,
        last_session:momentCustom,
        state: false,
      })
      return done(null, false)
    }

    if (
      moment(moment(token.last_petition).utc().add(12, 'hour')).isSameOrAfter(moment.utc()) &&
      token.rol == 1
    ) {
      await updateToken({
        uuid: payload._id,
        last_petition: moment.utc().add(12, 'hour').toDate(),
      })
   
      return done(null, {
        userId: token.userId,
        rol: token.rol,
      })
    }

    if (
      !moment(moment(token.last_petition).utc().add(240, 'hour')).isSameOrAfter(moment.utc()) &&
      token.rol == 1
    ) {
      await updateToken({
        uuid: payload._id,
        last_session: momentCustom,
        state: false,
      })
      return done(null, false)
    }

    if (
      moment(moment(token.last_petition).utc().add(240, 'hour')).isSameOrAfter(moment.utc()) &&
      token.rol == 1
    ) {
      
      await updateToken({
        uuid: payload._id,
        last_petition: moment.utc().add(240, 'hour').toDate(),
      })
   
      return done(null, {
        userId: token.userId,
        rol: token.rol,
      })
    }

    if (
      !moment(moment(token.last_petition).utc().add(240, 'hour')).isSameOrAfter(moment.utc()) &&
      token.rol == 1
    ) {
      await updateToken({
        uuid: payload._id,
        last_session: momentCustom,
        state: false,
      })
      return done(null, false)
    }

    if (
      moment(moment(token.last_petition).utc().add(240, 'hour')).isSameOrAfter(moment.utc()) &&
      token.rol == 1
    ) {
      
      await updateToken({
        uuid: payload._id,
        last_petition: moment.utc().add(240, 'hour').toDate(),
      })
 
      return done(null, {
        userId: token.userId,
        rol: token.rol,
      })
    }
    
  } catch (err) {
    return done(null, false)
  }
})
