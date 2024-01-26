import InvoiceModal from "../../modals/invoice/InvoiceModal";
import { useEffect, useState } from "react";

import useGetAllInvoices from "../../../hooks/invoices/useGetAllInvoices";
import useGetInvoiceById from "../../../hooks/invoices/useGetInvoiceById";

import Input from "../../components/ant-design/form/Input";
import RangePicker from "../../components/ant-design/form/RangePicker";
import PrimaryButton from "../../components/ant-design/buttons/PrimaryButton";
import { SearchButton } from "../../components/ant-design/buttons/SearchButton";
import { Selector } from "../../components/ant-design/form/Select";
import SignModal from "../../modals/invoice/SignModal";

import Table from "../../components/ant-design/Table";
import { EditOutlined, EyeOutlined, FileOutlined } from "@ant-design/icons";
import { formatDayjsDate, formatTimestampDate } from "../../../util/helpers";
import { Tag } from "antd";
import { EColors } from "../../../util/enums/colors";

import CreateNewInvoice from "../create-new-invoice/CreateNewInvoice";
import dayjs from "dayjs";
import useQueryParam from "../../../hooks/queryParam/useQueryParam";
import { invoiceTabKey } from "../Main";
import Tooltip from "../../components/ant-design/Tooltip";
const initialState = {
  fromDate: formatDayjsDate(dayjs().subtract(3, "month")),
  toDate: formatDayjsDate(dayjs().subtract(1, "day")),
};

const Invoice = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [input, setInput] = useState<any>(initialState);
  const [filters, setFilters] = useState<any>(initialState);
  const { getQuery } = useQueryParam();
  const [isCreateScreenOpen, setIsCreateScreenOpen] = useState(false);

  const [isSignModalOpen, setSignModalOpen] = useState(false);
  const showSignModal = () => {
    setSignModalOpen(true);
  };
  const closeSignModal = () => {
    setSignModalOpen(false);
  };

  const { data, isLoading }: any = useGetAllInvoices(input);

  const showModal = (invoice: any) => {
    setCurrentInvoice(invoice);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSignModalOpen(false);
  };
  const { data: pdfData, isLoading: pdfLoading }: any = useGetInvoiceById(
    currentInvoice as any,
  );

  const onFilterChange = (key: string) => (e: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: e.target.value }));
  };

  const onRangeFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({ ...prev, fromDate: e[0], toDate: e[1] }));
  };

  const handleSelectFilter = (key: string) => (value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [key]: value === "undefined" ? undefined : value,
    }));
  };
  function handleClick(invoice: any) {
    setCurrentInvoice(invoice.quote_id);
  }

  useEffect(() => {
    setFilters(initialState);
    setInput(initialState);
  }, [getQuery(invoiceTabKey)]);

  const columns: any["columns"] = [
    {
      title: "Status",
      dataIndex: "isSigned",
      width: 60,
      key: "isSigned",
      render: (isSigned: number) => {
        return isSigned === 1 ? (
          <Tooltip title={"Invoice"}>
            <FileOutlined style={{ color: EColors.blue }} />
          </Tooltip>
        ) : (
          <Tooltip title={"Quote"}>
            <FileOutlined style={{ color: EColors.green_6 }} />
          </Tooltip>
        );
      },
    },
    {
      title: "Id",
      dataIndex: "quote_id",
      key: "quote_id",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "receiver_name",
      key: "receiver_name",
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
      render: (revenue: " string") => {
        return <Tag color="blue">{revenue} </Tag>;
      },
    },

    {
      title: "Expense",
      dataIndex: "expense",
      key: "expense",
      render: (expense: "string") => {
        return expense === null ? (
          <div>{"-"}</div>
        ) : (
          <Tag color="red">{expense}</Tag>
        );
      },
    },
    {
      title: "Profit",
      dataIndex: "profit",
      key: "profit",
      render: (profit: "string") => {
        return profit === null ? (
          <div>{"-"}</div>
        ) : (
          <Tag color="green">{profit}</Tag>
        );
      },
    },
    {
      title: "Signature Date",
      dataIndex: "signature_date",
      key: "signature_date",
      render: (sigDate: "string") => {
        return sigDate === null ? (
          <div>{"-"}</div>
        ) : (
          <div>{formatTimestampDate(sigDate)}</div>
        );
      },
    },

    {
      title: "Creation Date",
      dataIndex: "creation_date",
      key: "creation_date",

      render: (creationDate: "string") => {
        return <div>{formatTimestampDate(creationDate)}</div>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: any) => (
        <div className="flex gap-5" onClick={() => handleClick(record)}>
          <Tooltip title="View">
            <EyeOutlined
              style={{
                fontSize: "1.2rem",
                cursor: "pointer",
                color: EColors.primary,
              }}
              onClick={showModal}
            />
          </Tooltip>
          {record.isSigned === 0 ? (
            <Tooltip title="Sign">
              <EditOutlined
                onClick={showSignModal}
                style={{
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: EColors.primary,
                }}
              />
            </Tooltip>
          ) : null}
        </div>
      ),
    },
  ];

  return (
    <>
      {!isCreateScreenOpen ? (
        <div className="w-6/8 mx-4">
          <div className="flex justify-end ">
            <PrimaryButton
              onClick={() => {
                setIsCreateScreenOpen(true);
              }}
            >
              Create New Invoice
            </PrimaryButton>
          </div>
          <div className="mb-4">
            <RangePicker
              onChange={onRangeFilterChange}
              value={
                filters?.fromDate && filters?.toDate
                  ? [dayjs(filters?.fromDate), dayjs(filters?.toDate)]
                  : undefined
              }
            />
            <Input
              addonBefore="Id"
              className="w-72 mx-2"
              onChange={onFilterChange("quote_id")}
            />
            <span className="mx-2">
              <Input
                addonBefore="Name"
                className="w-72"
                onChange={onFilterChange("name")}
              />
            </span>
            <span className="mx-2">
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
            </span>
            <span>
              <SearchButton className="" onClick={() => setInput(filters)} />
            </span>
          </div>
          <Table
            dataSource={data?.data}
            columns={columns}
            pagination={false}
            loading={isLoading}
          />

          <SignModal
            currentInvoice={currentInvoice}
            isSignModalOpen={isSignModalOpen}
            closeSignModal={closeSignModal}
          />
          <InvoiceModal
            closeModal={closeModal}
            isModalOpen={isModalOpen}
            pdf={pdfData?.data}
            isLoading={pdfLoading}
          />
        </div>
      ) : (
        <CreateNewInvoice
          isCreateScreenOpen={isCreateScreenOpen}
          setIsCreateScreenOpen={setIsCreateScreenOpen}
        />
      )}
    </>
  );
};

export default Invoice;
