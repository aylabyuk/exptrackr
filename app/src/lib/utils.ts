import crypto from 'crypto'
import jsonwebtoken from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const pathToKey = path.join(__dirname, '../../', 'id_rsa_priv.pem')
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8')

const validPassword = (
  password: crypto.BinaryLike,
  hash: string,
  salt: crypto.BinaryLike,
) => {
  var hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex')

  return hash === hashVerify
}

const genPassword = (password: string) => {
  var salt = crypto.randomBytes(32).toString('hex')
  var hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex')

  return {
    salt,
    hash,
  }
}

const issueJWT = (user: any) => {
  const _id = user._id

  const expiresIn = '1d'

  const payload = {
    sub: _id,
    iat: Date.now(),
  }

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: 'RS256',
  })

  return {
    token: signedToken,
    expires: expiresIn,
  }
}

export { validPassword, genPassword, issueJWT }
