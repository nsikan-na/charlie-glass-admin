import { Input, Button } from "antd";
import InvoiceCard from "./InvoiceCard";
import InvoiceModal from "../modals/InvoiceModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Invoice = (): JSX.Element => {
  const [invoices, setInvoices] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <InvoiceModal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div className="flex justify-between m-4">
        <div>
          <Input className="w-64 " />
          <Input className="w-64  ml-8" />
        </div>
        <Link to="createnewinvoice"></Link>
        <Button>New</Button>
      </div>

      <div className="flex flex-wrap justify-between items-center overflow-y-scroll h-3/4 p-6 my-4">
        {invoices.map((invoice) => (
          <InvoiceCard showModal={showModal} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

export default Invoice;
