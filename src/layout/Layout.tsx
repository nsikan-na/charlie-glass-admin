import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Layout as AntLayout } from "antd";
import TopNavBar from "./TopNavBar";
import Login from "../screens/login/LogIn";
import { useContext } from "react";
import { Context } from "../context";

const { Content } = AntLayout;

const Layout = () => {
  const { user }: any = useContext(Context);
  return (
    <>
      {!user?.userId ? (
        <Login />
      ) : (
        <>
          <TopNavBar />
          <main className="flex">
            {/* <Sidebar /> */}
            <Content className="w-4/6">
              <Outlet />
            </Content>
          </main>
        </>
      )}
    </>
  );
};

export default Layout;
