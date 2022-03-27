import { Schema, model } from 'mongoose'

interface IUser {
  username: string
  email: string
  hash: string
  salt: string
  avatar: string
  password?: string
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
})

const User = model('User', userSchema)

export { User, IUser }
