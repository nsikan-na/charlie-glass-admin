import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "../dashboard/Dashboard";
import Invoice from "./Invoice";

export default function Main() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Invoices",
      children: <Invoice />,
    },

    {
      key: "2",
      label: "Dashboard",
      children: <Dashboard />,
    },
  ];

  return <AntTabs className="ml-10" defaultActiveKey={"1"} items={items} />;
}
