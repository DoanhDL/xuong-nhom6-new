import axios from "axios"; // Import thư viện axios để gọi API

// Địa chỉ API của backend (chỉnh lại nếu cần)
const API_URL = "http://localhost:3000/categories"; // Đổi theo backend của bạn (loại bỏ khoảng trắng thừa nếu có)

// Định nghĩa kiểu dữ liệu danh mục (Category)
export interface Category {
  id: number; // Mỗi danh mục có một ID duy nhất (số)
  name: string; // Tên danh mục (chuỗi)
}

// Hàm lấy danh sách danh mục từ API
export const getCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get<Category[]>(API_URL); // Gửi yêu cầu GET đến API để lấy danh sách danh mục
  return data; // Trả về danh sách danh mục nhận được
};

// Hàm thêm danh mục mới vào API
export const addCategory = async (category: { name: string }): Promise<Category> => {
  const { data } = await axios.post<Category>(API_URL, category); // Gửi yêu cầu POST để thêm danh mục mới
  return data; // Trả về danh mục mới vừa được thêm
};

// Hàm cập nhật danh mục hiện có
export const updateCategory = async (category: { id: number; name: string }): Promise<Category> => {
  const { data } = await axios.put<Category>(`${API_URL}/${category.id}`, { name: category.name }); 
  // Gửi yêu cầu PUT để cập nhật danh mục theo ID
  return data; // Trả về danh mục đã được cập nhật
};

// Hàm xóa danh mục theo ID
export const deleteCategory = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`); // Gửi yêu cầu DELETE để xóa danh mục theo ID
};
