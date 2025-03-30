import { Button, DatePicker, Form, Input, Select, message } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useOne from '../hooks/useOne';
import useUpdate from '../hooks/useUpdate';

const UpdateOrder = () => {
  const { id } = useParams();
  const { data, isLoading } = useOne({ resource: "orders", id: Number(id) });
  const { mutate } = useUpdate({ resource: "orders", id: Number(id) });
  const navigate = useNavigate();

  const onFinish = (formData: any) => {
    mutate(
      {
        ...formData,
        order_date: formData.order_date ? formData.order_date.format("YYYY-MM-DD") : null,
      },
      {
        onSuccess: () => {
          message.success("Cập nhật đơn hàng thành công");
          setTimeout(() => {
            navigate(`/admin/orders`);
          }, 2000);
        },
        onError: (error: any) => console.log(error?.response?.data),
      }
    );
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className='flex items-center justify-between mb-4'>
        <h1 className="text-white bg-blue-600 px-4 py-2 rounded">Cập nhật đơn hàng</h1>
        <Link to={"/admin/orders"}>
          <Button className="text-white bg-green-600 px-4 py-2 rounded">Quay lại</Button>
        </Link>
      </div>

      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...data?.data,
          order_date: data?.data?.order_date ? dayjs(data.data.order_date) : null,
        }}
      >
        <Form.Item
          label="Tên Khách Hàng"
          name="customer_name"
          rules={[{ required: true, message: "Tên khách hàng không được để trống" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tổng Tiền"
          name="total_price"
          rules={[{ required: true, message: "Nhập tổng tiền đơn hàng" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Trạng Thái" name="order_status">
          <Select>
            <Select.Option value="Chờ xác nhận">🟡 Chờ xác nhận</Select.Option>
            <Select.Option value="Đang giao">🔵 Đang giao</Select.Option>
            <Select.Option value="Hoàn thành">✅ Hoàn thành</Select.Option>
            <Select.Option value="Đã hủy">❌ Đã hủy</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateOrder;
