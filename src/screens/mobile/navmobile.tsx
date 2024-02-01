import { useContext } from "react";
import { Context, userInitialState } from "../../context";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { UserOutlined, DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { EColors } from "../../util/enums/colors";
import setLocalStorage from "../../hooks/localstorage/setLocalStorage";
import ELocalStorage from "../../util/enums/localStorage";
import { ERoute } from "../../util/enums/routes";
import { useNavigate } from "react-router-dom";

export default function NavMobile() {
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
    <div className="bg-gray-300 w-full h-screen">
      <div className="flex   gap-32 bg-white">
        <div className="my-3">Charlie Glass Admin</div>
        <div className="my-3">
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
    </div>
  );
}
