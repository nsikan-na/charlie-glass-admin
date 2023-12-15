import { Input, Button } from "antd";
import InvoiceCard from "./InvoiceCard";
import InvoiceModal from "../modals/InvoiceModal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ERoute } from "../../routing/helpers";
import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";

const Invoice = (): JSX.Element => {
  const [invoices, setInvoices] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useGetAllInvoices();

  const [currentInvoice, setCurrentInvoice] = useState(null);

  const [pdf, setPdf] = useState(0);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { data: pdfData }: any = useGetInvoiceById(currentInvoice as any);
  useEffect(() => {
    setPdf(pdfData?.data);
  }, [currentInvoice, pdfData]);

  return (
    <div>
      <InvoiceModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        pdf={pdf}
      />
      <div className="flex justify-between m-4">
        <div>
          <Input className="w-64 " />
          <Input className="w-64  ml-8" />
        </div>
        <Link to={ERoute.CREATE_INVOICE}>
          <Button>New</Button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-between items-center overflow-y-scroll h-3/4 p-6 my-4">
        {data?.data?.map((invoice: any) => (
          <InvoiceCard
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
