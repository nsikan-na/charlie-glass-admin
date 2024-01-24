import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "./dashboard/Dashboard";
import Invoice from "./listing/Listing";
import useQueryParam from "../../hooks/queryParam/useQueryParam";

export default function Main() {
  const { getQuery, setQuery } = useQueryParam([
    { key: tabKey, value: ETabs.DASHBOARD },
  ]);

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
const tabKey = "tab";

enum ETabs {
  DASHBOARD = "dashboard",
  LISTING = "listing",
}
const items: TabsProps["items"] = [
  {
    key: ETabs.DASHBOARD,
    label: "Dashboard",
    children: <Dashboard />,
  },
  {
    key: ETabs.LISTING,
    label: "Listing",
    children: <Invoice />,
  },
];
