import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../provider/authProvider";
import { Form, Input, Button } from "antd";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (values: { email: string; password: string }) => {
        setLoading(true);
        try {
            await login(values);
            navigate("/admin"); // Chuyển hướng sau khi đăng nhập
        } catch (error) {
            console.error("Đăng nhập thất bại!", error);
        }
        setLoading(false);
    };

    return (
        <Form onFinish={handleLogin}>
            <Form.Item name="email" rules={[{ required: true, message: "Nhập email!" }]}>
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Nhập mật khẩu!" }]}>
                <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
                Đăng nhập
            </Button>
        </Form>
    );
};

export default Login;
        