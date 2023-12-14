import { Button } from "antd";
import InvoiceCard from "./InvoiceCard";
import InvoiceModal from "../modals/InvoiceModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ERoute } from "../../routing/helpers";
import Input from "../components/ant-design/Input";

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
        {invoices.map((invoice) => (
          <InvoiceCard showModal={showModal} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

export default Invoice;
