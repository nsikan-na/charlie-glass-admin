import InvoiceCard from "./InvoiceCard";
import InvoiceModal from "../modals/invoice/InvoiceModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../../routing/helpers";
import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";
import { uniqueId } from "lodash";
import Input from "../components/ant-design/form/Input";
import RangePicker from "../components/ant-design/form/RangePicker";
import PrimaryButton from "../components/ant-design/buttons/PrimaryButton";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";
import { Selector } from "../components/ant-design/form/Select";
import SignModal from "../modals/SignModal";

import useGetServices from "../../hooks/invoices/useGetServices";

import Spinner from "../components/ant-design/loading/spinner";

const Invoice = (): JSX.Element => {
  useGetServices();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [input, setInput] = useState(null);
  const [filters, setFilters] = useState(null);

  const [isSignModalOpen, setSignModalOpen] = useState(false);
  const showSignModal = () => {
    setSignModalOpen(true);
  };
  const closeSignModal = () => {
    setSignModalOpen(false);
  };

  const navigate = useNavigate();

  const { data, isLoading }: any = useGetAllInvoices(input);

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

  const handleSelectFilter = (key: string) => (value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [key]: value === "undefined" ? undefined : value,
    }));
  };

  return (
    <div>
      <div className="flex justify-between m-4">
        <div>
          <Input
            addonBefore="Quote #"
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
        <PrimaryButton onClick={() => navigate(ERoute.CREATE_INVOICE)}>
          Create New Invoice
        </PrimaryButton>
      </div>
      <Spinner spinning={isLoading}>
        <div className="grid grid-cols-3 overflow-y-scroll h-3/4 p-6 my-4">
          {data?.data?.map((invoice: any) => (
            <InvoiceCard
              key={uniqueId()}
              setCurrentInvoice={setCurrentInvoice}
              showModal={showModal}
              showSignModal={showSignModal}
              invoice={invoice}
              isLoading={isLoading}
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
        pdf={pdfData?.data}
      />
    </div>
  );
};

export default Invoice;
