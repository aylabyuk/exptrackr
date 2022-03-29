import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import fs from 'fs'
import path from 'path'
import { User } from '../models/user'
import { PassportStatic } from 'passport'
import { Request } from 'express'

const pathToKey = path.join(__dirname, '../../', 'id_rsa_pub.pem')
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8')

var cookieExtractor = (req: Request) => {
  let token = null
  if (req && req.signedCookies && req.signedCookies.jwt) {
    token = req.signedCookies['jwt']['token']
  }
  return token
}

const options = {
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
}

const passportConfig = (passport: PassportStatic) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      User.findOne({ _id: jwt_payload.sub }, (err: any, user: any) => {
        if (err) {
          return done(err, false)
        }

        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
    }),
  )
}

export default passportConfig
