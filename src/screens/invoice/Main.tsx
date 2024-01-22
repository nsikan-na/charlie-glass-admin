import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "../dashboard/Dashboard";
import Invoice from "./Invoice";
import useQueryString from "../../hooks/queryString/useQueryString";

const tabKey = "tab";

export default function Main() {
  const { getQuery, setQuery } = useQueryString();

  const changeQuery = (value: string) => setQuery(tabKey, value);
  return (
    <AntTabs
      className="ml-10"
      defaultActiveKey={getQuery(tabKey) || undefined}
      items={items}
      onChange={changeQuery}
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
    key: "listing",
    label: "Invoices",
    children: <Invoice />,
  },
];
