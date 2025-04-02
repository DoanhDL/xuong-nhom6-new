import React from 'react'
import useList from '../../hooks/Orders/useList'
import { Link } from 'react-router-dom';
import { Popconfirm, Select, Space, Table, Tag, message } from 'antd';
import { IOrders } from '../../interface/type';
import useDelete from '../../hooks/Orders/useDelete';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';


//hien thi option 
const { Option } = Select;

const ListOrders: React.FC = () => {

    const queryClient = useQueryClient();

    const { data, isError, isLoading, error } = useList({ resource: "orders" })
    const { mutate } = useDelete({ resource: "orders" });
    const dataSource = data?.data?.map((item: any) => ({
        key: item.id,
        ...item,
    }));


    // ham call API trang thai
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

    // ham  chon cac mau
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
            title: 'ID',
            dataIndex: "id",
            key: 'id',
        },
        {
            title: 'Tên khách hàng',
            dataIndex: "customer_name",
            key: 'customer_name',
        },
        {
            title: 'Tổng Tiền',
            dataIndex: "total_price",
            key: 'total_price',
        },
        {
            title: 'Trạng Thái',
            dataIndex: "order_status",
            key: 'order_status',
            render: (status: string, item: IOrders) => {
                if (status === "Đã hủy") {
                    return <Tag color={getColor(status)}>{status.toUpperCase()}</Tag>;
                }
                return (
                    <Select
                        value={status}
                        onChange={(newStatus) => handleChangeStatus(item.id, newStatus)}
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
            title: 'Ngày Tạo',
            dataIndex: "created_at",
            key: 'created_at',
            render: (value: string) => new Date(value).toLocaleDateString()
        },
        {
            title: 'Ngày Cập Nhật',
            dataIndex: "updated_at",
            key: 'updated_at',
            render: (value: string) => new Date(value).toLocaleDateString(),
        },

        {
            title: 'Hành Động',
            dataIndex: "action",
            render: (_: any, item: any) => (
                <Space size="middle">
                    <Link to={`/admin/orders/edit/${item.id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</Link>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa không?"
                        onConfirm={() => {
                            mutate(item.id, {
                                onSuccess: () => {
                                    message.success("Xóa thành công!");

                                },
                                onError: (error: any) => console.log(error?.response?.data),
                            })
                        }}
                        okText="OK"
                        cancelText="Cancel"
                    >

                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
                            Delete
                        </button>
                    </Popconfirm>
                </Space>

            )

        },
    ]


    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {error?.message}</div>
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
            <Table<IOrders> dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
        </>

    )
}

export default ListOrders
