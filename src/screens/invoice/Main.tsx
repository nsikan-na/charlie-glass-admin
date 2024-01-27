import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import Dashboard from "./dashboard/Dashboard";
import Invoice from "./listing/Listing";
import useQueryParam from "../../hooks/queryParam/useQueryParam";
import BreadCrumb from "../components/breadcrumb";

export default function Main() {
  const { getQuery, setQuery } = useQueryParam([
    { key: invoiceTabKey, value: EInvoiceTabs.DASHBOARD },
  ]);

  const changeQuery = (value: string) => setQuery(invoiceTabKey, value);

  return (
<<<<<<< HEAD
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
=======
    <AntTabs
      className=" bg-white"
      defaultActiveKey={getQuery(invoiceTabKey) || undefined}
      items={items}
      onChange={changeQuery}
    />
>>>>>>> 74abc7618ffcfa29d7e180132ec5f502b0d8efe9
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
