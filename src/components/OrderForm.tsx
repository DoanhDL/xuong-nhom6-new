import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Form, Input, Button, message, Select } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { IOrder } from "../interface/type";

const { Option } = Select;

const OrderForm: React.FC<{ mode: "add" | "edit" }> = ({ mode }) => {
    const { id } = useParams<{ id?: string }>();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const { data: order, isLoading } = useQuery({
        queryKey: ["order", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/orders/${id}`);
            return data;
        },
        enabled: mode === "edit" && !!id, // Chỉ fetch khi edit
    });

    useEffect(() => {
        if (order) {
            form.setFieldsValue(order);
        }
    }, [order, form]);

    const mutation = useMutation({
        mutationFn: async (values: IOrder) => {
            if (mode === "edit") {
                await axios.patch(`http://localhost:3000/orders/${id}`, values);
            } else {
                await axios.post("http://localhost:3000/orders", values);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            message.success(`${mode === "edit" ? "Cập nhật" : "Thêm"} đơn hàng thành công!`);
            navigate("/orders");
        },
        onError: () => {
            message.error(`${mode === "edit" ? "Cập nhật" : "Thêm"} đơn hàng thất bại!`);
        },
    });

    const onFinish = (values: IOrder) => {
        const now = new Date().toISOString(); // Lấy thời gian hiện tại ở dạng ISO

        const newOrder = {
            ...values,
            created_at: mode === "edit" ? values.created_at : now, // Nếu edit giữ nguyên, nếu add thì tạo mới
            updated_at: now, // Lúc nào cũng cập nhật
        };
        mutation.mutate(newOrder)
    };

    if (mode === "edit" && isLoading) return <p>Loading...</p>;

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item name="customer_name" label="Tên Khách Hàng" rules={[{ required: true, message: "Vui lòng nhập tên khách hàng" }]}>
                <Input />
            </Form.Item>

            <Form.Item name="total_price" label="Tổng Tiền" rules={[{ required: true, message: "Vui lòng nhập tổng tiền" }]}>
                <Input type="number" />
            </Form.Item>

            <Form.Item name="order_status" label="Trạng Thái">
                <Select>
                    <Option value="Chờ xác nhận">🟡 Chờ xác nhận</Option>
                    <Option value="Đang giao">🔵 Đang giao</Option>
                    <Option value="Hoàn thành">✅ Hoàn thành</Option>
                    <Option value="Đã hủy">❌ Đã hủy</Option>
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">{mode === "edit" ? "Cập nhật" : "Thêm"}</Button>
                <Button style={{ marginLeft: 10 }} onClick={() => navigate("/orders")}>Hủy</Button>
            </Form.Item>
        </Form>
    );
};

export default OrderForm;
