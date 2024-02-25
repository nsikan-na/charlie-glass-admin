import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "./dashboard/Dashboard";
import Listing from "./listing/Listing";
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

  const render = () => {
    switch (getQuery(invoiceTabKey)) {
      case EInvoiceTabs.DASHBOARD: {
        return <Dashboard />;
      }
      case EInvoiceTabs.LISTING: {
        return <Listing />;
      }
      default:
        return <Dashboard />;
    }
  };
  return (
    <>
      <AntTabs
        className=" bg-white hidden md:block "
        defaultActiveKey={getQuery(invoiceTabKey) || undefined}
        items={items}
        onChange={changeQuery}
      />
      <div className="md:hidden">{render()}</div>
    </>
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
    children: <Listing />,
  },
];
