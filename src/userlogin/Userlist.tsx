import { Table, Button, Space } from "antd";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteOne } from "../provider/dataProvider";
import useList from "../hooks/useList";

const UserList = () => {
  const { data, isLoading } = useList({ resource: "users" });
  const queryClient = useQueryClient();

  // 🟢 Xóa User
  const deleteUser = useMutation({
    mutationFn: (id: number) => deleteOne({ resource: "users", id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Hành động",
      key: "actions",
      render: (record: { id: number }) => (
        <Space>
          <Button type="primary">Sửa</Button>
          <Button danger onClick={() => deleteUser.mutate(record.id)}>Xóa</Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={data?.data} columns={columns} loading={isLoading} rowKey="id" />;
};

export default UserList;
