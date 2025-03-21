import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Modal, Space, Table, Tag, message, Select } from "antd";
import React from "react";
import { IOrder } from "../interface/type";
import axios from "axios";
import { Link } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;
const { Option } = Select;


const ListOrders: React.FC = () => {
    const queryClient = useQueryClient();

    const ListOrders = async (): Promise<IOrder[]> => {
        try {
            const { data } = await axios.get(`http://localhost:3000/orders`);
            return data;
        } catch (error) {
            console.error("Lỗi khi hiển thị đơn hàng");
            return [];
        }
    };

    const { data: orders, isLoading, isError } = useQuery({
        queryKey: ["orders"],
        queryFn: ListOrders,
    });

    const deleteOrders = useMutation({
        mutationFn: async (id: string) => {
            await axios.delete(`http://localhost:3000/orders/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            message.success("Xoá đơn hàng thành công");
        },
        onError: () => {
            message.error("Xoá đơn hàng thất bại");
        },
    });

    const handleChangeStatus = async (id: string, newStatus: string) => {
        try {
            await axios.patch(`http://localhost:3000/orders/${id}`, {
                order_status: newStatus,
            });
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            message.success("Cập nhật trạng thái thành công");
        } catch (error) {
            message.error("Lỗi khi cập nhật trạng thái");
        }
    };

    const showDeleteConfirm = (id: string) => {
        confirm({
            title: "Bạn có chắc chắn muốn xoá Đơn hàng này?",
            icon: <ExclamationCircleOutlined />,
            content: "Thao tác này không thể hoàn tác.",
            okText: "Xoá",
            okType: "danger",
            cancelText: "Huỷ",
            onOk() {
                deleteOrders.mutate(id);
            },
            onCancel() {
                message.info("Hủy xoá Đơn hàng!");
            },
        });
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching orders</p>;

    const getColor = (status: string) => {
        switch (status) {
            case "Chờ xác nhận":
                return "orange";
            case "Đang giao":
                return "blue";
            case "Hoàn thành":
                return "green";
            case "Đã hủy":
                return "red";
            default:
                return "gray";
        }
    };

    // Hàm custom màu hiển thị
    const tagRender = (props: any) => {
        const { value } = props;
        return (
            <Tag color={getColor(value)} style={{ fontWeight: "bold" }}>
                {value.toUpperCase()}
            </Tag>
        );
    };


    const columns = [
        {
            title: "Mã Đơn hàng",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Khách Hàng",
            dataIndex: "customer_name",
            key: "customer_name",
        },
        {
            title: " Tổng Tiền ",
            dataIndex: "total_price",
            key: "total_price",
            render: (price: number) => <span>{price.toLocaleString()} VND</span>,
        },
        {
            title: "Trạng Thái",
            dataIndex: "order_status",
            key: "order_status",
            render: (status: string, record: IOrder) => {
                if (status === "Đã hủy") {
                    return <Tag color={getColor(status)}>{status.toUpperCase()}</Tag>;
                }
                return (
                    <Select
                        value={status}
                        onChange={(newStatus) => handleChangeStatus(record.id, newStatus)}
                        style={{ width: 160, fontWeight: "bold" }}
                        tagRender={tagRender}
                    >
                        <Option value="Chờ xác nhận" disabled={status !== "Chờ xác nhận"} style={{ color: "orange" }}>
                            🟡 Chờ xác nhận
                        </Option>
                        <Option value="Đang giao" disabled={status === "Hoàn thành" || status === "Đang giao"} style={{ color: "blue" }}>
                            🔵 Đang giao
                        </Option>
                        <Option value="Hoàn thành" disabled={status === "Hoàn thành"} style={{ color: "green" }}>
                            ✅ Hoàn thành
                        </Option>
                        <Option value="Đã hủy" disabled={status === "Hoàn thành" || status === "Đang giao"} style={{ color: "red" }}>
                            ❌ Đã hủy
                        </Option>

                    </Select>
                );
            },
        },
        {
            title: "Ngày Tạo",
            dataIndex: "created_at",
            key: "created_at",
            render: (date: string) => date ? new Date(date).toLocaleString("vi-VN") : "Không có dữ liệu"
        },
        {
            title: "Cập Nhật",
            dataIndex: "updated_at",
            key: "updated_at",
            render: (date: string) => date ? new Date(date).toLocaleString("vi-VN") : "Không có dữ liệu"
        },
        {
            title: "Thao Tác",
            key: "action",
            render: (_: any, record: IOrder) => (
                <Space size="middle">
                    <Link to={`/admin/orders/edit/${record.id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
                        Sửa
                    </Link>
                    <button
                        onClick={() => showDeleteConfirm(String(record.id))}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                        Xoá
                    </button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div>
                <h2 className="text-white float-left bg-blue-600 px-4 py-2 rounded inline-block ">
                    Danh mục sản phẩm
                </h2>
                <h2 className="text-white float-right bg-green-600 px-4 py-2 rounded inline-block ">
                    <Link to={"/admin/orders/add"}>Thêm sản phẩm Mới</Link>
                </h2>
            </div>
            <Table<IOrder> columns={columns} dataSource={orders} rowKey="id" pagination={{ pageSize: 5 }} />
        </>
    );
};

export default ListOrders;
