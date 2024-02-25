import { Form } from "antd";
import Input from "../components/ant-design/form/Input";
import { useState } from "react";
import useLogin from "../../hooks/login/useLogin";
import { EColors } from "../../util/enums/colors";
import PrimaryButton from "../components/ant-design/buttons/PrimaryButton";

const demoLogin = {
  username: "cgiadmin",
  password: "cgiadminpass",
};

const Login: React.FC = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (key: string) => (e: any) => {
    setInput((i) => ({ ...i, [key]: e.target.value }));
  };

  const checkLogin = useLogin();
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(/iStock-502706671.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex justify-center items-center p-10 md:p-16 xl:p-20 bg-white shadow-sm drop-shadow-sm "
        style={{ borderTop: `.5rem solid ${EColors.primary}` }}
      >
        <div style={{ margin: "auto" }}>
          <Form>
            <div className="text-center md:text-2xl text-lg my-3">
              LOG IN TO YOUR ACCOUNT
            </div>
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
              <PrimaryButton
                htmlType="submit"
                onClick={() => {
                  checkLogin.mutate(input);
                }}
              >
                Log In
              </PrimaryButton>
            </div>
            <div
              className="flex justify-center mt-6 -mb-8 cursor-pointer "
              style={{ color: EColors.primary }}
              onClick={() => {
                checkLogin.mutate(demoLogin);
              }}
            >
              <a className="mb-4 md:mb-0">Log In As Demo User</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
