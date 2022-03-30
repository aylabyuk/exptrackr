import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import fs from 'fs'
import path from 'path'
import { User } from '../models/user'
import { PassportStatic } from 'passport'
import { Request } from 'express'

const pathToKey = path.join(__dirname, '../../', 'id_rsa_pub.pem')
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8')

const cookieExtractor = (req: Request) => {
  if (!req.headers.cookie) return ''

  let result = ''
  const rawCookies = req.headers.cookie.split('; ')

  rawCookies.forEach((rawCookie) => {
    const [key, value] = rawCookie.split('=')

    if (key === 'jwt') {
      result = JSON.parse(decodeURIComponent(value)).token
    }
  })

  console.log('result', result)

  return result
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
