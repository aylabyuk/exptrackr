import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import fs from 'fs'
import path from 'path'
import { User } from '../models/user'
import { PassportStatic } from 'passport'

const pathToKey = path.join(__dirname, '../../', 'id_rsa_pub.pem')
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
}

module.exports = (passport: PassportStatic) => {
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
