import InvoiceModal from "../../modals/invoice/InvoiceModal";
import { useEffect, useState } from "react";

import useGetAllInvoices from "../../../hooks/invoices/useGetAllInvoices";
import useGetInvoiceById from "../../../hooks/invoices/useGetInvoiceById";

import Input from "../../components/ant-design/form/Input";
import RangePicker from "../../components/ant-design/form/RangePicker";
import { SearchButton } from "../../components/ant-design/buttons/SearchButton";
import { Selector } from "../../components/ant-design/form/Select";
import SignModal from "../../modals/invoice/SignModal";
import Table from "../../components/ant-design/Table";
import {
  EditOutlined,
  EyeOutlined,
  FileOutlined,
  FilterOutlined,
  DeleteOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { formatTimestampDate } from "../../../util/helpers";
import { Modal, Tag } from "antd";
import { EColors } from "../../../util/enums/colors";

import CreateNewInvoice from "../create-new-invoice/CreateNewInvoice";
import dayjs from "dayjs";
import useQueryParam from "../../../hooks/queryParam/useQueryParam";
import { invoiceTabKey } from "../Main";
import Tooltip from "../../components/ant-design/Tooltip";

import Spinner from "../../components/ant-design/Spinner";
import { uniqueId } from "lodash";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import { NewMobileCard } from "./ListingCards";
import FiltersModal from "../../modals/invoice/FiltersModal";
import PrimaryButton from "../../components/ant-design/buttons/PrimaryButton";
import useDeleteInvoice from "../../../hooks/invoices/useDeleteQuote";

const initialState = {
  fromDate: null,
  toDate: null,
};

const Invoice = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState<any>(null);
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

  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const showFiltersModal = () => {
    setFilterModalOpen(true);
  };
  const closeFiltersModal = () => {
    setFilterModalOpen(false);
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
    setCurrentInvoice(invoice.invoice_id);
  }

  useEffect(() => {
    setFilters(initialState);
    setInput(initialState);
  }, [getQuery(invoiceTabKey)]);

  const deleteInvoice = useDeleteInvoice(currentInvoice, () => {
    setInput(initialState);
    closeSignModal();
  });

  const handleDeleteIconClick = (invoice: any) => () => {
    Modal.confirm({
      title: `Do you want to delete invoice ${invoice?.invoice_id}?`,
      icon: <CloseCircleOutlined style={{ color: EColors.red_6 }} />,
      onOk: () => {
        console.log("Ok");
        deleteInvoice.mutate(invoice?.invoice_id);
      },
      okText: "Delete",
      okButtonProps: {
        style: { backgroundColor: EColors.primary, color: "white" },
      },
      cancelButtonProps: {
        style: {
          backgroundColor: "white",
          color: EColors.primary,
          borderColor: EColors.primary,
        },
      },
    });
  };

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
      dataIndex: "invoice_id",
      key: "invoice_id",
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
              className="hidden lg:block"
              style={{
                fontSize: "1.1rem",
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
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  color: EColors.primary,
                }}
              />
            </Tooltip>
          ) : null}
          <Tooltip title="Delete">
            <DeleteOutlined
              onClick={handleDeleteIconClick(record)}
              style={{
                fontSize: "1.1rem",
                cursor: "pointer",
                color: EColors.red_6,
              }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  function handleFilterSubmit() {
    setInput(filters);
    closeFiltersModal();
  }

  return (
    <>
      {!isCreateScreenOpen ? (
        <div className="w-6/8 ">
          <div className="lg:flex justify-end  hidden mb-2">
            <PrimaryButton
              className=""
              onClick={() => {
                setIsCreateScreenOpen(true);
              }}
            >
              Create New Quote
            </PrimaryButton>
          </div>
          <div className="my-3 lg:hidden">
            <SecondaryButton onClick={showFiltersModal}>
              <FilterOutlined />
              Apply Filters
            </SecondaryButton>
          </div>
          <div className="w-full mb-4 mr-3 hidden  lg:flex">
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
              className=" mx-2 w-28"
              onChange={onFilterChange("invoice_id")}
            />
            <span className="mx-2">
              <Input
                addonBefore="Name"
                className="w-60"
                onChange={onFilterChange("name")}
              />
            </span>
            <span className="mx-2">
              <Selector
                onChange={handleSelectFilter("isSigned")}
                className="w-full"
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
              <SearchButton className="" onClick={handleFilterSubmit} />
            </span>
          </div>
          <div className="flex justify-center md:hidden ">
            <Spinner spinning={isLoading}>
              <div className="grid grid-cols-1 gap-y-8 ">
                {data?.data?.content?.map((listing: any) => (
                  <NewMobileCard
                    key={uniqueId()}
                    listing={listing}
                    isLoading={isLoading}
                    showSignModal={showSignModal}
                    showModal={showModal}
                    setCurrentInvoice={setCurrentInvoice}
                  />
                ))}
              </div>
            </Spinner>
          </div>
          <Table
            className="hidden md:block"
            dataSource={data?.data?.content}
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
            pdf={pdfData?.data?.content}
            isLoading={pdfLoading}
          />
          <FiltersModal
            closeFiltersModal={closeFiltersModal}
            isFilterModalOpen={isFilterModalOpen}
            onFilterChange={onFilterChange}
            handleSelectFilter={handleSelectFilter}
            handleFilterSubmit={handleFilterSubmit}
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
