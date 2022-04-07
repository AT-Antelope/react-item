import { Card, Button, Form, Checkbox, Input, message } from "antd";
import logo from "@/assets/logo.png";
import "./index.scss";
import { useStore } from "@/store";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginStore } = useStore();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    // values 是所有表单项中用户输入的内容
    // console.log("Success:", values);

    // 请求接口
    await loginStore.getToken({
      mobile: values.username,
      code: values.password,
    });

    // 跳转首页
    // navigate("/", { replace: true });
    navigate("/");
    message.success("登录成功");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt=""></img>

        {/* 表单 */}
        <Form
          name="basic"
          validateTrigger={["onBlur"]}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* 用户名 */}
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名(手机号)!",
              },
              // {
              //   pattern: /^1[3-9]\d{9}$/,
              //   message: "请输入正确的手机号",
              //   validateTrigger: "onBlur",
              // },
            ]}
          >
            <Input />
          </Form.Item>

          {/* 密码 */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* 记住我 */}
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* 登录按钮 */}
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
