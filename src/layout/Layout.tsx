import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNavBar from "./TopNavBar";
import { Layout as AntLayout } from "antd";
import Login from "../screens/Login/LogIn";
import styled from "styled-components";

const { Content } = AntLayout;

const Layout = () => {
  return (
    <>
      {/* {!user ? (
      {/* {!user ? (
        <Login />
      ) : ( */}
      <TopNavBar />
      <StyledMain>
        <Sidebar />
        <StyledContent>
          <Outlet />
        </StyledContent>
      </StyledMain>
      {/* )} */}
    </>
  );
};

export default Layout;

const StyledMain = styled.main`
  display: flex;
`;

const StyledContent = styled(Content)`
  width: 70%;
`;
