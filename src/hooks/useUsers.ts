import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, addUser, updateUser, deleteUser } from "../api";
import { User, UserFormData } from "../types";
import { message } from "antd";

// Hook quản lý người dùng với kiểu dữ liệu
export const useUsers = () => {
  const queryClient = useQueryClient();

  // Lấy danh sách người dùng
  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Thêm người dùng
  const addMutation = useMutation({
    mutationFn: (newUser: UserFormData) => addUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      message.success("Thêm người dùng thành công!");
    },
  });

  // Cập nhật người dùng
  const updateMutation = useMutation({
    mutationFn: ({ id, user }: { id: number; user: UserFormData }) => updateUser(id, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      message.success("Cập nhật thành công!");
    },
  });

  // Xóa người dùng
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      message.success("Xóa thành công!");
    },
  });

  return {
    users,
    isLoading,
    addUser: addMutation.mutate,
    updateUser: updateMutation.mutate,
    deleteUser: deleteMutation.mutate,
  };
};
