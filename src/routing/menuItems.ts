import { UserOutlined } from "@ant-design/icons";

type TProps = {
  icon: any;
  label: string;
  path?: string;
  submenu?: { label: string; path: string }[];
}[];

export const menuItems: TProps = [
  {
    icon: UserOutlined,
    path: "/",
    label: "Invoice",
  },
];
