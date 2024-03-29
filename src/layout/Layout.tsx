import { Outlet } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import Login from "../screens/login/LogIn";
import { useContext } from "react";
import { Context } from "../context";
import { Content } from "antd/es/layout/layout";
import { EColors } from "../util/enums/colors";

const Layout = () => {
  const { user }: any = useContext(Context);
  return (
    <>
      {user?.userId !== 0 && !user?.userId ? (
        <Login />
      ) : (
        <div style={{ borderTop: `.5rem solid ${EColors.primary}` }}>
          <TopNavBar />
          <main className="flex">
            {/* <Sidebar /> */}
            <Content className="w-full my-2 mx-10 p-0">
              <Outlet />
            </Content>
          </main>
        </div>
      )}
    </>
  );
};

export default Layout;
