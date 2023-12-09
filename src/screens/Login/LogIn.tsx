import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import { Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Input from "../components/Input";
import { useQueryClient } from "react-query";
import login from "../../api/login/useLogin";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);
  const [username, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const parsedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "") || null
      : null;
    if (!parsedUser) {
      navigate("/login");
      return;
    }
    const decoded = jwtDecode(parsedUser?.accessToken);
    if (!decoded?.exp) {
      navigate("/login");
      return;
    }
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const isValidUser = currentTimestamp > decoded?.exp ? false : true;

    if (!isValidUser) {
      navigate("/login");
      return;
    }
    setUser(parsedUser);
  }, [user]);

  const handleLogin = async () => {
    if (!username || !password) return;
    const response = await login({
      username: username || "",
      password: password || "",
    });
    setUser(response);
    localStorage.setItem("user", JSON.stringify(response));
  };

  const handleClick = () => {
    queryClient.prefetchQuery(["user"], () =>
      handleLogin().then(() => {
        navigate("/");
      })
    );
  };

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem",
          borderRadius: "5%",
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <div style={{ margin: "auto" }}>
          <Form>
            <div
              style={{
                textAlign: "center",
                fontSize: "2rem",
                margin: ".75rem 0",
              }}
            >
              Log In
            </div>
            <div>Username</div>
            <Input
              autoComplete="username"
              onChange={(e: any) => setUserName(e.target.value)}
            />
            <div style={{ margin: "1rem 0" }}>
              <div>Password</div>
              <Input
                type="password"
                autoComplete="current-password"
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button htmlType="submit" onClick={handleClick}>
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
