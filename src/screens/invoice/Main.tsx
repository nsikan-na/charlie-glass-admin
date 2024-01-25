import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "./dashboard/Dashboard";
import Invoice from "./listing/Listing";
import useQueryParam from "../../hooks/queryParam/useQueryParam";
import BreadCrumb from "../components/breadcrumb";

export default function Main() {
  const { getQuery, setQuery } = useQueryParam([
    { key: tabKey, value: ETabs.DASHBOARD },
  ]);

  const changeQuery = (value: string) => setQuery(tabKey, value);

  return (
    <>
      <BreadCrumb
        className="ml-10"
        items={[
          {
            title: "Invoice",
          },
          {
            title: getQuery(tabKey || undefined)
              ? (getQuery(tabKey || undefined) || "").charAt(0).toUpperCase() +
                (getQuery(tabKey || undefined) || "").slice(1).toLowerCase()
              : "Default",
          },
        ]}
      />
      <AntTabs
        className="ml-10 bg-white"
        defaultActiveKey={getQuery(tabKey) || undefined}
        items={items}
        onChange={changeQuery}
      />
    </>
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
