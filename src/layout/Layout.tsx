import { Outlet } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import Login from "../screens/login/LogIn";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { Content } from "antd/es/layout/layout";
import Mobile from "../screens/mobile/mobile";

const Layout = () => {
  const { user }: any = useContext(Context);
  const [isDesktop, setIsDeskTop] = useState(window.innerWidth >= 2560);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth <= 2560 && window.innerWidth >= 600,
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsDeskTop(window.innerWidth >= 2560);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    // <>
    //   {!isMobile ? (
    //     !user?.userId ? (
    //       <Login />
    //     ) : (
    //       <>
    //         <TopNavBar />
    //         <main className="flex">
    //           {/* <Sidebar /> */}
    //           <Content className="w-full my-2 mx-10 p-0 ">
    //             <Outlet />
    //           </Content>
    //         </main>
    //       </>
    //     )
    //   ) : (
    //     <Mobile />
    //   )}
    // </>
    <>
      {isDesktop && !user?.userId ? (
        <Login />
      ) : (
        <>
          <TopNavBar />
          <main className="flex">
            {/* <Sidebar /> */}
            <Content className="w-full my-2 mx-10 p-0 ">
              <Outlet />
            </Content>
          </main>{" "}
        </>
      )}
      {isMobile && <Mobile />}
    </>
  );
};

export default Layout;
