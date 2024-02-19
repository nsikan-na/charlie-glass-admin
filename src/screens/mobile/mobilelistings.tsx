import { useState } from "react";
import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import MobileCards from "./mobilecards";
import { formatDayjsDate } from "../../util/helpers";
import dayjs from "dayjs";
import SignModal from "../modals/invoice/SignModal";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";
import InvoiceModal from "../modals/invoice/InvoiceModal";
import Drawer from "antd/es/drawer";
import { FilterOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import Spinner from "../components/ant-design/Spinner";
import Button from "../components/ant-design/buttons/PrimaryButton";
import MobileFiltersModal from "./ModalsMobile/filtersmodal";

export default function MobileListings({
  open,
  onClose,
  setScreen,
  showDrawer,
}: any) {
  const [isSignModalOpen, setSignModalOpen] = useState(false);
  const showSignModal = () => {
    setSignModalOpen(true);
  };

  const initialState = {
    fromDate: formatDayjsDate(dayjs().subtract(3, "month")),
    toDate: formatDayjsDate(dayjs()),
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const navigate = useNavigate();
  const [input, setInput] = useState<any>(initialState);
  const [filters, setFilters] = useState<any>(initialState);

  //FiltersModal
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  function showFiltersModal() {
    setIsFiltersModalOpen(true);
  }
  function closeFiltersModal() {
    setIsFiltersModalOpen(false);
  }

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

  function handleOnClose() {
    setInput(filters);
    closeFiltersModal();
  }

  return (
    <div>
      <Drawer title={"Create New Quote"} onClose={onClose} open={open}></Drawer>
      <div className="flex  text-lg justify-between">
        <div className="mt-4  ml-4">
          <Button onClick={setScreen}>View Dashboard</Button>
        </div>
        <div className="mt-4  mr-4">
          <Button onClick={showDrawer}>Create New Quote</Button>
        </div>
      </div>
      <div className="flex mt-4  ml-4 text-lg gap-1">
        <div>
          <Button onClick={showFiltersModal}>
            <FilterOutlined />
            Apply Filters
          </Button>
        </div>
      </div>
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
        <MobileFiltersModal
          isOpen={isFiltersModalOpen}
          closeModal={closeFiltersModal}
          onRangeFilterChange={onRangeFilterChange}
          handleOnClose={handleOnClose}
          filters={filters}
          onFilterChange={onFilterChange}
          handleSelectFilter={handleSelectFilter}
        />
      </div>
    </div>
  );
}
