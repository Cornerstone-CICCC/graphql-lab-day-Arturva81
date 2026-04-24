import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  productName: String,
  productPrice: Number
})

export const Product = mongoose.model('Product', productSchema)
