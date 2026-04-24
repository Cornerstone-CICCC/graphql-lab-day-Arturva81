import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
})

export const Order = mongoose.model('Order', orderSchema)
