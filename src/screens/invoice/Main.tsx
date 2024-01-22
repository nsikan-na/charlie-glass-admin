import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "../dashboard/Dashboard";
import Invoice from "./Invoice";
import useQueryString from "../../hooks/queryString/useQueryString";

export default function Main() {
  const [query, updateQuery] = useQueryString();

  const changeQuery = (key: any, value: any) => {
    updateQuery(key, value);
  };

  return (
    <AntTabs
      className="ml-10"
      defaultActiveKey={query.get("tab")}
      items={items}
      onChange={(key: string) => changeQuery("tab", key)}
    />
  );
}

const items: TabsProps["items"] = [
  {
    key: "dashboard",
    label: "Dashboard",
    children: <Dashboard />,
  },
  {
    key: "invoice-listing",
    label: "Invoices",
    children: <Invoice />,
  },
];
