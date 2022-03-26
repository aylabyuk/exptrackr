import { hashSync } from 'bcrypt'
import { User } from '../models/user'

class UserService {
  async CreateUser(user: any) {
    const userToAdd = new User({
      ...user,
      password: hashSync(user.password, 10),
    })
    return userToAdd.save()
  }
}

export default UserService
