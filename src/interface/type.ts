
export interface IOrders {
  id: string
  customer_name: string
  total_price: number
  order_status: string
  created_at: Date
  updated_at: Date
}

export type OrdersFormData = Omit<IOrders, "id">