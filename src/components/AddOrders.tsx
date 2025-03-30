import { Button, Form, Input, Select, message } from "antd";
import useCreate from "../hooks/useCreate";
import { Link, useNavigate } from "react-router-dom";

const AddOrder: React.FC = () => {
    const navigate = useNavigate();
    const { mutate } = useCreate({ resource: "orders" });

    const onFinish = (dataOrders: any) => {
        mutate(dataOrders, {
            onSuccess: () => {
                message.success("Thêm đơn hàng thành công");
                setTimeout(() => {
                    navigate(`/admin/orders`);
                }, 2000);
            },
            onError: (error: any) => console.log(error?.message?.data),
        });
    };

    return (
        <>
            <div className='flex items-center justify-between mb-4'>
                <h1 className="text-white bg-blue-600 px-4 py-2 rounded">Thêm đơn hàng</h1>
                <Link to={"/admin/orders"}>
                    <Button className="text-white bg-green-600 px-4 py-2 rounded">Quay lại</Button>
                </Link>
            </div>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="customer_name" label="Tên Khách Hàng" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="total_price" label="Tổng Tiền" rules={[{ required: true }]}>
                    <Input type="number" />
                </Form.Item>

                <Form.Item name="order_status" label="Trạng Thái">
                    <Select>
                        <Select.Option value="Chờ xác nhận">🟡 Chờ xác nhận</Select.Option>
                        <Select.Option value="Đang giao">🔵 Đang giao</Select.Option>
                        <Select.Option value="Hoàn thành">✅ Hoàn thành</Select.Option>
                        <Select.Option value="Đã hủy">❌ Đã hủy</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Thêm</Button>
                    <Button style={{ marginLeft: 10 }} onClick={() => navigate("/admin/orders")}>Hủy</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddOrder;
