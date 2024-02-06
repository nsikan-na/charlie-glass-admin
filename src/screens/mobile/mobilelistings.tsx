import { useContext, useEffect, useState } from "react";
import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import MobileCards from "./mobilecards";
import { formatDayjsDate } from "../../util/helpers";
import dayjs from "dayjs";
import SignModal from "../modals/invoice/SignModal";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";
import InvoiceModal from "../modals/invoice/InvoiceModal";
import Drawer from "antd/es/drawer";
import { UserOutlined, DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Space, Avatar, MenuProps, Divider } from "antd";
import { EColors } from "../../util/enums/colors";
import { Context, userInitialState } from "../../context";
import setLocalStorage from "../../hooks/localstorage/setLocalStorage";
import ELocalStorage from "../../util/enums/localStorage";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../../util/enums/routes";
import RangePicker from "../components/ant-design/form/RangePicker";
import Input from "../components/ant-design/form/Input";
import { Selector } from "../components/ant-design/form/Select";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";
import Spinner from "../components/ant-design/Spinner";
import Button from "../components/ant-design/buttons/PrimaryButton";

export default function MobileListings({ open, onClose, setScreen }: any) {
  const [isSignModalOpen, setSignModalOpen] = useState(false);
  const showSignModal = () => {
    setSignModalOpen(true);
  };
  const { user }: any = useContext(Context);
  const initialState = {
    fromDate: formatDayjsDate(dayjs().subtract(3, "month")),
    toDate: formatDayjsDate(dayjs()),
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const navigate = useNavigate();
  const [input, setInput] = useState<any>(initialState);
  const [filters, setFilters] = useState<any>(initialState);

  const { data, isLoading }: any = useGetAllInvoices(input);

  const { data: pdfData, isLoading: pdfLoading }: any = useGetInvoiceById(
    currentInvoice as any,
  );
  const onRangeFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({ ...prev, fromDate: e[0], toDate: e[1] }));
  };
  const onFilterChange = (key: string) => (e: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSelectFilter = (key: string) => (value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [key]: value === "undefined" ? undefined : value,
    }));
  };

  const showModal = (listing: any) => {
    setCurrentInvoice(listing);

    setIsModalOpen(true);
  };

  const closeSignModal = () => {
    setSignModalOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSignModalOpen(false);
  };

  function handleClick(invoice: any) {
    setCurrentInvoice(invoice.invoice_id);
  }

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          className="cursor-pointer  "
          onClick={() => {
            setLocalStorage(ELocalStorage.USER, userInitialState);
            navigate(ERoute.LOGIN);
          }}
        >
          <LogoutOutlined className="mr-2" />
          Log Out
        </span>
      ),
    },
  ];

  function handleOnClose() {
    setInput(filters);
    onClose();
  }
  return (
    <div>
      <Drawer
        title={
          <Dropdown menu={{ items }} className="mb-2 mt-4">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span className="">
                  <Avatar
                    size="small"
                    className="mr-1 self-center"
                    style={{ backgroundColor: EColors.primary }}
                    icon={<UserOutlined style={{ color: EColors.white }} />}
                  />
                  {`${user.userName}`}
                </span>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        }
        onClose={onClose}
        open={open}
      >
        <div className="flex  text-lg gap-1">
          <div>
            <Button onClick={setScreen}>View Dashboard</Button>
          </div>
        </div>

        <Divider>Filters</Divider>
        <div className="grid grid-cols-1 gap-y-4">
          <div className="flex justify-between">
            <RangePicker
              onChange={onRangeFilterChange}
              value={
                filters?.fromDate && filters?.toDate
                  ? [dayjs(filters?.fromDate), dayjs(filters?.toDate)]
                  : undefined
              }
            />
            <SearchButton className="" onClick={handleOnClose} />
          </div>
          <div className="flex justify-between">
            <Input
              addonBefore="Id"
              className="w-72 "
              onChange={onFilterChange("invoice_id")}
            />
            <SearchButton className="" onClick={handleOnClose} />
          </div>
          <div className="flex justify-between">
            <Input
              addonBefore="Name"
              className="w-72"
              onChange={onFilterChange("name")}
            />
            <SearchButton className="" onClick={handleOnClose} />
          </div>
          <div className="flex justify-between">
            <Selector
              onChange={handleSelectFilter("isSigned")}
              className="w-40"
              defaultValue="All"
              style={{ width: 120 }}
              options={[
                { label: "All", value: "undefined" },
                { label: "Quote", value: false },
                { label: "Invoice", value: true },
              ]}
            />
            <SearchButton className="" onClick={handleOnClose} />
          </div>
        </div>
      </Drawer>
      <div className="flex justify-center mt-8 ">
        <Spinner spinning={isLoading}>
          <div className="grid grid-cols-1 gap-y-8 ">
            {data?.data?.content?.map((listing: any) => (
              <MobileCards
                isLoading={isLoading}
                listing={listing}
                showSignModal={showSignModal}
                showModal={showModal}
                setCurrentInvoice={setCurrentInvoice}
                handleClick={handleClick}
              />
            ))}
          </div>
        </Spinner>
        <SignModal
          currentInvoice={currentInvoice}
          isSignModalOpen={isSignModalOpen}
          closeSignModal={closeSignModal}
        />
        <InvoiceModal
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          pdf={pdfData?.data?.content}
          isLoading={pdfLoading}
        />
      </div>
    </div>
  );
}
