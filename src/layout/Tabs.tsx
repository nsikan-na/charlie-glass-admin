import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "antd";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

export default function Tabs() {
  const { activeTab, setActiveTab }: any = useContext(Context);
  const navigate = useNavigate();
  const onChange = (key: any) => {
    setActiveTab(key);
    // navigate(activeTab);
  };
  useEffect(() => {
    navigate(activeTab);
  }, [activeTab, navigate]);
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
    <AntTabs
      className="ml-10"
      defaultActiveKey="/invoice"
      items={items}
      onChange={onChange}
    />
  );
}
