import { useEffect, useState } from "react";
import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import MobileCards from "./mobilecards";
import { formatDayjsDate } from "../../util/helpers";
import dayjs from "dayjs";
import SignModal from "../modals/invoice/SignModal";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";
import InvoiceModal from "../modals/invoice/InvoiceModal";

export default function MobileListings() {
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
  const [input, setInput] = useState<any>(initialState);
  const [filters, setFilters] = useState<any>(initialState);
  const { data, isLoading }: any = useGetAllInvoices(input);
  const { data: pdfData, isLoading: pdfLoading }: any = useGetInvoiceById(
    currentInvoice as any,
  );
  useEffect(() => {
    console.log(pdfData?.data?.content);
  }, [pdfData]);
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

  return (
    <div className="flex justify-center mt-8 ">
      <div className="grid grid-cols-1 gap-y-8 ">
        {data?.data?.content?.map((listing: any) => (
          <MobileCards
            listing={listing}
            showSignModal={showSignModal}
            showModal={showModal}
            setCurrentInvoice={setCurrentInvoice}
            handleClick={handleClick}
          />
        ))}
      </div>
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
  );
}
