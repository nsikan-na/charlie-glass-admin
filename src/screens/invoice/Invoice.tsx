import { Button } from "antd";
import InvoiceCard from "./InvoiceCard";
import InvoiceModal from "../modals/invoice/InvoiceModal";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ERoute } from "../../routing/helpers";
import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";
import { uniqueId } from "lodash";
import { formatDate } from "../../util/helpers";
import Input from "../components/ant-design/form/Input";
import RangePicker from "../components/ant-design/form/RangePicker";
import PrimaryButton from "../components/ant-design/buttons/PrimaryButton";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";

const Invoice = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [input, setInput] = useState(null);
  const [filters, setFilters] = useState(null);
  const navigate = useNavigate();

  const { data } = useGetAllInvoices(input);

  const showModal = () => {
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

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <div>
      <InvoiceModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        pdf={pdfData?.data}
      />
      <div className="flex justify-between m-4">
        <div className="w-full">
          <Input
            label="Invoice #"
            className="inline "
            onChange={onFilterChange("invoice_id")}
          />
          <span className="mx-8">
            <Input
              label="Name"
              className=" inline"
              onChange={onFilterChange("name")}
            />
          </span>
          <RangePicker onChange={onRangeFilterChange} className="mr-4" />
          <SearchButton
            className=""
            onClick={() => {
              setInput(filters);
            }}
          />
        </div>
        <PrimaryButton onClick={() => navigate(ERoute.INVOICE)}>
          New
        </PrimaryButton>
      </div>
      <div className="flex flex-wrap justify-between items-center overflow-y-scroll h-3/4 p-6 my-4">
        {data?.data?.map((invoice: any) => (
          <InvoiceCard
            key={uniqueId()}
            setCurrentInvoice={setCurrentInvoice}
            showModal={showModal}
            invoice={invoice}
          />
        ))}
      </div>
    </div>
  );
};

export default Invoice;
