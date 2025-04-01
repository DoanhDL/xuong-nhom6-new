import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // Đặt URL API phù hợp
  headers: {
    "Content-Type": "application/json",
  },
});
