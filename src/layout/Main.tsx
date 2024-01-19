import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";

export default function Main() {
  const items: TabsProps["items"] = [
    {
      key: "/invoice",
      label: "Invoices",
      children: "",
    },
    {
      key: "/invoice/create",
      label: "Create New",
      children: "",
    },
    {
      key: "/dashboard",
      label: "Dashboard",
      children: "",
    },
  ];

  return (
    <div>
      <AntTabs className="ml-10" defaultActiveKey="/invoice" items={items} />
    </div>
  );
}
