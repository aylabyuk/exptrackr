import { Schema, model } from 'mongoose'

interface IUser {
  name: string
  email: string
  password: string
  avatar: string
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
})

const User = model('User', userSchema)

export { User }