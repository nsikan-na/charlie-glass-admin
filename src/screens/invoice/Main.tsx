import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "../dashboard/Dashboard";
import Invoice from "./Invoice";

export default function Main() {
  return <AntTabs className="ml-10" defaultActiveKey={"1"} items={items} />;
}

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
    children: <Dashboard />,
  },
  {
    key: "2",
    label: "Invoices",
    children: <Invoice />,
  },
];
