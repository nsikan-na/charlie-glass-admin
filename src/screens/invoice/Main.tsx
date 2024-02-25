import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "./dashboard/Dashboard";
import Invoice from "./listing/Listing";
import useQueryParam from "../../hooks/queryParam/useQueryParam";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Main() {
  const location = useLocation();

  const { getQuery, setQuery } = useQueryParam([
    { key: invoiceTabKey, value: EInvoiceTabs.DASHBOARD },
  ]);

  const changeQuery = (value: string) => setQuery(invoiceTabKey, value);

  useEffect(() => {
    const query = getQuery(invoiceTabKey);
    if (!query) {
      setQuery(invoiceTabKey, EInvoiceTabs.DASHBOARD);
    }
  }, [location.pathname]);

  return (
    <AntTabs
      className=" bg-white  "
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
