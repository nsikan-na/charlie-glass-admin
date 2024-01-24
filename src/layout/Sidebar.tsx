import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { FileOutlined } from "@ant-design/icons";
import { ERoute } from "../util/enums/routes";
import { EColors } from "../util/enums/colors";

const Sidebar = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = menuItems.map((menuItem) => ({
    key: _.uniqueId(),
    icon: React.createElement(menuItem.icon),
    label: menuItem.label,
    onClick: () =>
      !menuItem?.submenu && menuItem.path && navigate(menuItem.path),
    children:
      menuItem?.submenu &&
      menuItem?.submenu.map((item) => ({
        key: _.uniqueId(),
        label: item.label,
        onClick: () => item.path && navigate(item.path),
      })),
  }));

  return (
    <Layout.Sider collapsed={true} className="bg-white h-full">
      <Menu
        mode="inline"
        items={items}
        className="h-full"
        style={{
          borderRight: `.2 rem solid ${EColors.gray_6}`,
        }}
      />
    </Layout.Sider>
  );
};

export default Sidebar;

type TProps = {
  icon: any;
  label: string;
  path?: ERoute;
  submenu?: { label: string; path: string }[];
}[];

const menuItems: TProps = [
  {
    icon: FileOutlined,
    path: ERoute.INVOICE,
    label: "Invoice",
  },
];
