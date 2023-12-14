import { Button, Form } from "antd";
import Input from "../components/ant-design/Input";

const Login: React.FC = () => {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="flex justify-center items-center p-20 rounded-lg bg-white bg-opacity-90">
        <div style={{ margin: "auto" }}>
          <Form>
            <div className="text-center text-2xl my-3">Log In</div>
            <Input autoComplete="username" />
            <div style={{ margin: "1rem 0" }}>
              <div>Password</div>
              <Input type="password" autoComplete="current-password" />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button htmlType="submit">Log In</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
