import { compareSync, hashSync } from 'bcrypt'
import jwt from 'jsonwebtoken'

import config from '../configuration/config'
import ApiError from '../middleware/ApiError'
import { User } from '../models/user'

class UserService {
  async CreateUser(user: any) {
    const userToAdd = new User({
      ...user,
      password: hashSync(user.password, 10),
    })
    return userToAdd.save()
  }

  async LoginUser(credentials: any) {
    const foundUser = await User.findOne({ email: credentials.email })

    if (!foundUser) {
      throw ApiError.notFound('User not found')
    }

    if (!compareSync(credentials.password, foundUser.password)) {
      throw ApiError.forbidden('Incorrect password')
    }

    const token = jwt.sign(
      {
        username: credentials.username,
        id: foundUser._id,
      },
      config.jwtSecret,
      { expiresIn: config.jwtTokenLife },
    )

    const refreshToken = jwt.sign(
      {
        username: credentials.username,
        id: foundUser._id,
      },
      config.jwtRefreshSecret,
      { expiresIn: config.jwtRefreshTokenLife },
    )

    return {
      status: 'Logged in',
      token,
      refreshToken,
    }
  }
}

export default UserService
