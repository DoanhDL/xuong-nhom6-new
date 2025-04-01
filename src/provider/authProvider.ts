const API_URL = "http://localhost:3000/users";

// 🟢 Đăng nhập (kiểm tra user trong danh sách users)
export const login = async ({ email, password }: { email: string; password: string }) => {
  const response = await fetch(`${API_URL}?email=${email}&password=${password}`);
  const users = await response.json();

  if (users.length === 0) throw new Error("Sai tài khoản hoặc mật khẩu");

  // Mô phỏng JWT (JSON Web Token)
  const token = `fake-jwt-token-${Date.now()}`;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(users[0]));
  
  return { token, user: users[0] };
};

// 🟢 Đăng ký (thêm user vào danh sách users)
export const register = async ({ email, password }: { email: string; password: string }) => {
  const checkUser = await fetch(`${API_URL}?email=${email}`);
  const existingUsers = await checkUser.json();
  
  if (existingUsers.length > 0) throw new Error("Email đã tồn tại");

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const newUser = await response.json();
  
  return newUser;
};

// 🟢 Lấy danh sách users (có token)
export const getUsers = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Bạn chưa đăng nhập");

  const response = await fetch(API_URL);
  return response.json();
};
