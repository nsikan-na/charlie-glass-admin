import { UserOutlined } from "@ant-design/icons";
import { ERoute } from "./helpers";

type TProps = {
  icon: any;
  label: string;
  path?: ERoute;
  submenu?: { label: string; path: string }[];
}[];

export const menuItems: TProps = [
  {
    icon: UserOutlined,
    path: ERoute.INVOICE,
    label: "Invoice",
  },
];
