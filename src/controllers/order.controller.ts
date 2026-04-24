import { Order } from '../models/order.model'

export const getOrders = () => Order.find().populate('productId customerId')
export const createOrder = (productId: string, customerId: string) => new Order({ productId, customerId }).save()
export const updateOrder = (id: string, data: any) => Order.findByIdAndUpdate(id, data, { new: true })
export const deleteOrder = (id: string) => Order.findByIdAndDelete(id)
