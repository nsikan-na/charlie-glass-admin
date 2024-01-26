import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "./dashboard/Dashboard";
import Invoice from "./listing/Listing";
import useQueryParam from "../../hooks/queryParam/useQueryParam";

export default function Main() {
  const { getQuery, setQuery } = useQueryParam([
    { key: invoiceTabKey, value: EInvoiceTabs.DASHBOARD },
  ]);

  const changeQuery = (value: string) => setQuery(invoiceTabKey, value);

  return (
    <AntTabs
      className="ml-10 bg-white"
      defaultActiveKey={getQuery(invoiceTabKey) || undefined}
      items={items}
      onChange={changeQuery}
    />
  );
}
export const invoiceTabKey = "tab";

export enum EInvoiceTabs {
  DASHBOARD = "dashboard",
  LISTING = "listing",
}
const items: TabsProps["items"] = [
  {
    key: EInvoiceTabs.DASHBOARD,
    label: "Dashboard",
    children: <Dashboard />,
  },
  {
    key: EInvoiceTabs.LISTING,
    label: "Listing",
    children: <Invoice />,
  },
];
