import { getProducts, createProduct, getProductById, updateProduct, deleteProduct } from '../controllers/product.controller'
import { getCustomers, createCustomer, getCustomerById, updateCustomer, deleteCustomer } from '../controllers/customer.controller'
import { getOrders, createOrder, updateOrder, deleteOrder } from '../controllers/order.controller'
import { Order } from '../models/order.model'
import { Product } from '../models/product.model'
import { Customer } from '../models/customer.model'

export const resolvers = {
  Query: {
    products: () => getProducts(),
    customers: () => getCustomers(),
    orders: () => getOrders(),
    getProductById: (_: any, { id }: { id: string }) => getProductById(id),
    getCustomerById: (_: any, { id }: { id: string }) => getCustomerById(id),
  },
  Product: {
    customers: async (parent: any) => {
      const orders = await Order.find({ productId: parent._id }).populate('customerId')
      return orders.map((o: any) => o.customerId)
    }
  },
  Customer: {
    products: async (parent: any) => {
      const orders = await Order.find({ customerId: parent._id }).populate('productId')
      return orders.map((o: any) => o.productId)
    }
  },
  Order: {
    product: (parent: any) => Product.findById(parent.productId),
    customer: (parent: any) => Customer.findById(parent.customerId),
  },
  Mutation: {
    addProduct: (_: any, args: any) => createProduct(args),
    editProduct: (_: any, { id, ...data }: any) => updateProduct(id, data),
    removeProduct: async (_: any, { id }: { id: string }) => !!(await deleteProduct(id)),

    addCustomer: (_: any, args: any) => createCustomer(args),
    editCustomer: (_: any, { id, ...data }: any) => updateCustomer(id, data),
    removeCustomer: async (_: any, { id }: { id: string }) => !!(await deleteCustomer(id)),

    addOrder: (_: any, { productId, customerId }: { productId: string, customerId: string }) => createOrder(productId, customerId),
    editOrder: (_: any, { id, ...data }: any) => updateOrder(id, data),
    removeOrder: async (_: any, { id }: { id: string }) => !!(await deleteOrder(id)),
  }
}
