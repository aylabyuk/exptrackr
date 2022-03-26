import { Schema, model } from 'mongoose'

interface ICategory {
  name: string
  description: string
  icon: string
}

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  icon: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
})

const Category = model('Category', categorySchema)

export { Category }