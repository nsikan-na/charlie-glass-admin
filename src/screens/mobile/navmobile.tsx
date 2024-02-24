import { Avatar, Dropdown, Space, MenuProps } from "antd";
import {
  DownOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { EColors } from "../../util/enums/colors";
import { useContext } from "react";
import { Context, userInitialState } from "../../context";
import setLocalStorage from "../../hooks/localstorage/setLocalStorage";
import { ERoute } from "../../util/enums/routes";
import ELocalStorage from "../../util/enums/localStorage";
import { useNavigate } from "react-router-dom";

export default function NavMobile({
  setScreenDashboard,
  setScreenListing,
}: any) {
  const items: any = [
    {
      key: "1",
      label: <div onClick={setScreenDashboard}>Dashboard</div>,
    },
    {
      key: "2",
      label: <div onClick={setScreenListing}>Listings</div>,
    },
  ];

  return (
    <div>
      <div className="flex   justify-between bg-gray-300">
        <div className="my-3 ">
          <Dropdown menu={{ items }} className="mb-2 mt-4 ml-3 ">
            <a onClick={(e) => e.preventDefault()}>
              <MenuOutlined style={{ fontSize: "2rem" }} />
            </a>
          </Dropdown>
        </div>
        <div>
          <img
            className="mt-2 w-12 h-12"
            src="/logo2small.png"
            alt="charlie glass logo"
          />
        </div>
        <LogoutDropdown />
      </div>
    </div>
  );
}

function LogoutDropdown() {
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
  return (
    <Dropdown menu={{ items }} className="mb-2 mt-4 mr-3">
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <span className="flex">
            <Avatar
              size="large"
              className=" self-center"
              style={{ backgroundColor: EColors.primary }}
              icon={<UserOutlined style={{ color: EColors.white }} />}
            />
          </span>
        </Space>
      </a>
    </Dropdown>
  );
}
