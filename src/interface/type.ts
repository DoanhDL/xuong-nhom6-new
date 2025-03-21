export interface IOrder {
  id:string; // ID duy nhất của đơn hàng
  customer_id: string; // ID của khách hàng
  customer_name: string; // Tên khách hàng
  total_price: number; // Tổng giá trị đơn hàng
  order_status: "Chờ xác nhận" | "Đang giao" | "Hoàn thành" | "Đã hủy"; // Trạng thái đơn hàng
  created_at: string; // Ngày giờ khách đặt hàng
  updated_at: string; // Ngày cập nhật trạng thái cuối cùng
}


export type OrderFromData = Omit<IOrder, "id">