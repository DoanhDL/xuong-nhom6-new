import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Table, Button, Input, Space, Modal, Form, message, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getCategories, addCategory, updateCategory, deleteCategory, Category } from "../../api/categoryApi";

const CategoryPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [form] = Form.useForm();

  const { data: categories = [], isLoading } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        return await getCategories();
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
        return [];
      }
    },
  });

  const addMutation = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      message.success("Danh mục đã được thêm!");
      setIsModalOpen(false);
      form.resetFields();
    },
    onError: (error) => {
      message.error("Lỗi khi thêm danh mục: " + error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      message.success("Danh mục đã được cập nhật!");
      setIsModalOpen(false);
      form.resetFields();
    },
    onError: (error) => {
      message.error("Lỗi khi cập nhật danh mục: " + error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      message.success("Danh mục đã được xóa!");
    },
    onError: (error) => {
      message.error("Lỗi khi xóa danh mục: " + error.message);
    },
  });

  const handleSubmit = (values: { name: string }) => {
    if (editingCategory) {
      updateMutation.mutate({ id: editingCategory.id, name: values.name });
    } else {
      addMutation.mutate({ name: values.name });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Space style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            setEditingCategory(null);
            setIsModalOpen(true);
          }}
        >
          Thêm danh mục
        </Button>
      </Space>

      <Table
        loading={isLoading}
        dataSource={categories}
        rowKey={(record) => record.id || Math.random().toString()}
        columns={[
          { title: "ID", dataIndex: "id", key: "id" },
          { title: "Tên danh mục", dataIndex: "name", key: "name" },
          {
            title: "Hành động",
            key: "actions",
            render: (_, record: Category) => (
              <Space>
                <Button
                  icon={<EditOutlined />}
                  onClick={() => {
                    setEditingCategory(record);
                    form.setFieldsValue({ name: record.name });
                    setIsModalOpen(true);
                  }}
                />
                <Popconfirm
                  title="Bạn có chắc chắn muốn xóa danh mục này không?"
                  onConfirm={() => deleteMutation.mutate(record.id)}
                  okText="Xóa"
                  cancelText="Hủy"
                  okButtonProps={{ danger: true }}
                >
                  <Button danger icon={<DeleteOutlined />} />
                </Popconfirm>
              </Space>
            ),
          },
        ]}
      />

      <Modal
        title={editingCategory ? "Chỉnh sửa danh mục" : "Thêm danh mục"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="name"
            label="Tên danh mục"
            rules={[{ required: true, message: "Vui lòng nhập tên danh mục!" }]}
          >
            <Input placeholder="Nhập tên danh mục..." />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CategoryPage;
