import { Avatar, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context, userInitialState } from "../context";
import setLocalStorage from "../hooks/localstorage/setLocalStorage";
import ELocalStorage from "../util/enums/localStorage";
import { ERoute } from "../util/enums/routes";
import { EColors } from "../util/enums/colors";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const { Header } = Layout;

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

  return (
    <Header
      className="bg-white "
      style={{
        borderBottom: `.1rem solid ${EColors.gray_4}`,
        borderTop: `.5rem solid ${EColors.primary}`,
      }}
    >
      <div className="flex justify-between">
        <div
          onClick={() => navigate(ERoute.ROOT)}
          className="mr-4 mt-3 text-2xl  cursor-pointer"
        >
          Charlie Glass Admin
        </div>
        <div>
          <Dropdown menu={{ items }} className="mb-2 mt-4">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span className="">
                  <Avatar
                    size="small"
                    className="mr-1 self-center"
                    style={{ backgroundColor: EColors.primary }}
                    icon={<UserOutlined style={{ color: EColors.white }} />}
                  />
                  {`${user.userName}`}
                </span>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default TopNavBar;
