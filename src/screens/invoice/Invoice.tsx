import { Button } from "antd";
import InvoiceCard from "./InvoiceCard";
import InvoiceModal from "../modals/InvoiceModal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ERoute } from "../../routing/helpers";
import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";
import Input from "../components/ant-design/Input";

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
        <div className="w-full">
          <Input label="Invoice #" className="inline " />
          <span className="mx-8">
            <Input label="Name" className=" inline" />
          </span>
          <Input label="Date" className="inline " />
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
