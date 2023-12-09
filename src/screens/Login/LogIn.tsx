import { Button, Form } from "antd";
import Input from "../components/ant-design/Input";

const Login: React.FC = () => {
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
