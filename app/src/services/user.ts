import ApiError from '../middleware/ApiError'
import { User } from '../models/user'
import * as utils from '../lib/utils'

class UserService {
  async CreateUser(user: any) {
    const saltHash = utils.genPassword(user.password)

    const userToAdd = new User({
      ...user,
      salt: saltHash.salt,
      hash: saltHash.hash,
    })

    return userToAdd.save()
  }

  async LoginUser(credentials: any) {
    const foundUser = await User.findOne({ email: credentials.email })

    if (!foundUser) {
      throw ApiError.notFound('User not found')
    }

    const isValid = utils.validPassword(
      credentials.password,
      foundUser.hash,
      foundUser.salt,
    )

    if (!isValid) {
      throw ApiError.forbidden('Incorrect password')
    }

    const tokenObject = utils.issueJWT(foundUser)

    return tokenObject
  }

  async FindByUsername(username: string) {
    const foundUser = await User.findOne({ username })
    return foundUser
  }
}

export default UserService
