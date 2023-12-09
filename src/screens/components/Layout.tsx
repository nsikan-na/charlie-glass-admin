import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNavBar from "./TopNavBar";
import { Layout as AntLayout } from "antd";
import { Context } from "../../context";
import { useContext } from "react";
import Login from "../Login/LogIn";
import styled from "styled-components";

const { Content } = AntLayout;

const Layout = () => {
  return (
    <>
      {/* {!user ? (
        <Login />
      ) : ( */}
      <div>
        <TopNavBar />
        <StyledMain>
          <Sidebar />
          <StyledContent>
            <Outlet />
          </StyledContent>
        </StyledMain>
      </div>
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
