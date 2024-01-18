import { Button, Form } from "antd";
import Input from "../components/ant-design/form/Input";
import { useContext, useEffect, useState } from "react";
import useLogin from "../../hooks/login/useLogin";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../../routing/helpers";
import { Context } from "../../context";

const Login: React.FC = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (user?.userId) navigate(ERoute.ROOT);
  }, []);

  const handleInputChange = (key: string) => (e: any) => {
    setInput((i) => ({ ...i, [key]: e.target.value }));
  };

  const checkLogin = useLogin();
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="flex justify-center items-center p-20 rounded-lg bg-white bg-opacity-90">
        <div style={{ margin: "auto" }}>
          <Form>
            <div className="text-center text-2xl my-3">Log In</div>
            <div>Username</div>
            <Input
              autoComplete="username"
              onChange={handleInputChange("username")}
            />
            <div style={{ margin: "1rem 0" }}>
              <div>Password</div>
              <Input
                type="password"
                autoComplete="current-password"
                onChange={handleInputChange("password")}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                htmlType="submit"
                onClick={() => {
                  checkLogin.mutate(input);
                }}
              >
                Log In
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
