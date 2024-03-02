import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context, userInitialState } from "../context";
import setLocalStorage from "../hooks/localstorage/setLocalStorage";
import ELocalStorage from "../util/enums/localStorage";
import { ERoute } from "../util/enums/routes";
import { EColors } from "../util/enums/colors";
import { LogoutOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { MenuProps, Dropdown, Space } from "antd";

const TopNavBar = () => {
  const { user }: any = useContext(Context);
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          className="cursor-pointer  "
          onClick={() => {
            setLocalStorage(ELocalStorage.USER, userInitialState);
            navigate(ERoute.LOGIN);
          }}
        >
          <LogoutOutlined className="mr-2" />
          Log Out
        </span>
      ),
    },
  ];

  const screenItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div onClick={() => navigate(ETabs.INVOICE_DASHBOARD)}>Dashboard</div>
      ),
    },
    {
      key: "2",
      label: <div onClick={() => navigate(ETabs.INVOICE_LISTING)}>Listing</div>,
    },
  ];

  return (
    <div className="flex justify-between content-center my-2">
      <div
        onClick={() => navigate(ERoute.ROOT)}
        className="ml-4 text-2xl hidden md:block cursor-pointer mb-4"
      >
        Charlie Glass Admin
      </div>
      <div className="md:hidden">
        <Dropdown menu={{ items: screenItems }} className="mb-2 4">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <span className="ml-1">
                <MenuOutlined />
              </span>
            </Space>
          </a>
        </Dropdown>
      </div>
      <div
        onClick={() => navigate(ERoute.ROOT)}
        className=" text-2xl md:hidden cursor-pointer"
      >
        <div className="w-7">
          <img src="/logo2small.png " alt="charlie glass logo" />
        </div>
      </div>

      <div>
        <Dropdown menu={{ items }} className="mb-2 mt-4 mr-2">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <span className="">
                <Avatar
                  size="small"
                  className=" self-center"
                  style={{ backgroundColor: EColors.primary }}
                  icon={<UserOutlined style={{ color: EColors.white }} />}
                />

                <div className="hidden mr-4 mt-3 md:inline">{`${user.userName}`}</div>
              </span>
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};
enum ETabs {
  INVOICE_DASHBOARD = "/invoice?tab=dashboard",
  INVOICE_LISTING = "/invoice?tab=listing",
}

export default TopNavBar;
