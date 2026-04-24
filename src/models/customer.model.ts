import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true }
})

export const Customer = mongoose.model('Customer', customerSchema)
