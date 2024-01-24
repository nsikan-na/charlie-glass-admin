import InvoiceModal from "../modals/invoice/InvoiceModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";

import Input from "../components/ant-design/form/Input";
import RangePicker from "../components/ant-design/form/RangePicker";
import PrimaryButton from "../components/ant-design/buttons/PrimaryButton";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";
import { Selector } from "../components/ant-design/form/Select";
import SignModal from "../modals/SignModal";

import Spinner from "../components/ant-design/loading/spinner";
import Table from "../components/ant-design/Table";
import Empty from "../components/ant-design/loading/empty";
import { EditOutlined, EyeOutlined, FileOutlined } from "@ant-design/icons";
import { formatDate } from "../../util/helpers";
import { Tag, Tooltip } from "antd";
import { EColors } from "../../util/enums/colors";

import CreateNewInvoice from "../create-new-invoice/CreateNewInvoice";

const Invoice = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [input, setInput] = useState(null);
  const [filters, setFilters] = useState(null);

  const [isCreateScreenOpen, setIsCreateScreenOpen] = useState(true);
  function handleIsCreateScreenOpen(): void {
    setIsCreateScreenOpen((isOpen) => !isOpen);
  }

  const [isSignModalOpen, setSignModalOpen] = useState(false);
  const showSignModal = () => {
    setSignModalOpen(true);
  };
  const closeSignModal = () => {
    setSignModalOpen(false);
  };

  const navigate = useNavigate();

  const { data, isLoading }: any = useGetAllInvoices(input);

  const showModal = (invoice: any) => {
    setCurrentInvoice(invoice);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { data: pdfData }: any = useGetInvoiceById(currentInvoice as any);

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
          <div>{formatDate(sigDate)}</div>
        );
      },
    },

    {
      title: "Creation Date",
      dataIndex: "creation_date",
      key: "creation_date",

      render: (creationDate: "string") => {
        return <div>{formatDate(creationDate)}</div>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, record: any, isSigned: any) => (
        <div className="flex gap-5" onClick={() => handleClick(record)}>
          <EyeOutlined
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
            onClick={showModal}
          />
          {record.isSigned === 0 ? (
            <EditOutlined
              onClick={showSignModal}
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            />
          ) : (
            ""
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      {isCreateScreenOpen ? (
        <div>
          <div className="flex justify-between m-4">
            <div>
              <Input
                addonBefore="Id"
                className="w-72"
                onChange={onFilterChange("quote_id")}
              />
              <span className="mx-8">
                <Input
                  addonBefore="Name"
                  className="w-72"
                  onChange={onFilterChange("name")}
                />
              </span>
              <RangePicker onChange={onRangeFilterChange} className="" />
              <span className="mx-8">
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
            <PrimaryButton onClick={handleIsCreateScreenOpen}>
              Create New Invoice
            </PrimaryButton>
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
          />
        </div>
      ) : (
        <CreateNewInvoice handleIsCreateScreenOpen={handleIsCreateScreenOpen} />
      )}
    </>
  );
};

export default Invoice;
