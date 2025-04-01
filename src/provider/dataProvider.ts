import axios from "axios";

const API_URL = "http://localhost:3000"; // Chỉnh URL nếu cần

type ResourceParams = { resource: string };
type ItemParams = { resource: string; id: number };
type CreateOrUpdateParams = { resource: string; data: object };

const dataProvider = {
  // 🟢 Lấy danh sách dữ liệu
  getList: async ({ resource }: ResourceParams) => {
    const response = await axios.get(`${API_URL}/${resource}`);
    return { data: response.data };
  },

  // 🟢 Lấy chi tiết một item theo ID
  getOne: async ({ resource, id }: ItemParams) => {
    const response = await axios.get(`${API_URL}/${resource}/${id}`);
    return { data: response.data };
  },

  // 🟢 Tạo mới một item
  createOne: async ({ resource, data }: CreateOrUpdateParams) => {
    const response = await axios.post(`${API_URL}/${resource}`, data);
    return { data: response.data };
  },

  // 🟢 Cập nhật một item theo ID
  updateOne: async ({ resource, id, data }: CreateOrUpdateParams & { id: number }) => {
    const response = await axios.put(`${API_URL}/${resource}/${id}`, data);
    return { data: response.data };
  },

  // 🟢 Xóa một item theo ID
  deleteOne: async ({ resource, id }: ItemParams) => {
    await axios.delete(`${API_URL}/${resource}/${id}`);
  },
};

export const { getList, getOne, createOne, updateOne, deleteOne } = dataProvider;
