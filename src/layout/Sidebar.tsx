import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { menuItems } from "../routing/menuItems";

const { Sider } = Layout;

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
    <Sider>
      <Menu mode="inline" items={items} className="h-full" />
    </Sider>
  );
};

export default Sidebar;
