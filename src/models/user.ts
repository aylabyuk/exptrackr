import { Schema, model } from 'mongoose'

interface IUser {
  username: string
  email: string
  password: string
  avatar: string
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
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
})

const User = model('User', userSchema)

export { User }
