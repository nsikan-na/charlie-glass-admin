import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Layout as AntLayout } from "antd";
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
      <main className="flex">
        {/* <Sidebar /> */}
        <Content className="w-4/6">
          <Outlet />
        </Content>
      </main>
      {/* )} */}
    </>
  );
};

export default Layout;
