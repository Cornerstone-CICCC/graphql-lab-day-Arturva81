import { Customer } from '../models/customer.model'

export const getCustomers = () => Customer.find()
export const createCustomer = (data: any) => new Customer(data).save()
export const getCustomerById = (id: string) => Customer.findById(id)
export const updateCustomer = (id: string, data: any) => Customer.findByIdAndUpdate(id, data, { new: true })
export const deleteCustomer = (id: string) => Customer.findByIdAndDelete(id)
