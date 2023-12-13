import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Layout as AntLayout } from "antd";
import styled from "styled-components";
import TopNavBar from "./TopNavBar";

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
        {/* <Sidebar /> */}
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
