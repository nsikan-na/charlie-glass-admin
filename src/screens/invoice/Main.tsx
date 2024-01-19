import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "../dashboard/Dashboard";
import Invoice from "./Invoice";

export default function Main() {
  const items: TabsProps["items"] = [
    {
      key: "/invoice",
      label: "Invoices",
      children: <Invoice />,
    },

    {
      key: "/dashboard",
      label: "Dashboard",
      children: <Dashboard />,
    },
  ];

  return (
    <div>
      <AntTabs className="ml-10" defaultActiveKey="/invoice" items={items} />
    </div>
  );
}
