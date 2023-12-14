import { Button, Form } from "antd";
import styled from "styled-components";
import Input from "../components/ant-design/Input";

const Login: React.FC = () => {
  return (
    <BackgroundDiv>
      <LoginDiv>
        <div style={{ margin: "auto" }}>
          <Form>
            <LoginLabel>Log In</LoginLabel>
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
      </LoginDiv>
    </BackgroundDiv>
  );
};

export default Login;

const BackgroundDiv = styled.div`
  background-color: lightgray;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  border-radius: 5%;
  background-color: rgba(255, 255, 255, 0.9);
`;

const LoginLabel = styled.div`
  text-align: center;
  font-size: 2rem;
  margin: 0.75rem 0;
`;
