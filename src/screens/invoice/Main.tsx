import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "./dashboard/Dashboard";
import Listing from "./listing/Listing";
import useQueryParam from "../../hooks/queryParam/useQueryParam";

export default function Main() {
  const { getQuery, setQuery } = useQueryParam([
    { key: invoiceTabKey, value: EInvoiceTabs.DASHBOARD },
  ]);

  const changeQuery = (value: string) => setQuery(invoiceTabKey, value);

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
