import { Input } from "antd";
import styled from "styled-components";
import { Button } from "antd";
import InvoiceCard from "./InvoiceCard";
import InvoiceModal from "../modals/InvoiceModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Invoice = (): JSX.Element => {
  const [invoices, setInvoices] = useState(invoices1);

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 2rem",
        }}
      >
        <div>
          <DateInput />
          <NameInput />
        </div>
        <Link to="createnewinvoice">
          <NewBtn type="primary">New</NewBtn>
        </Link>
      </div>

      <div
        className="cardcontainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          overflowY: "scroll",
          height: "75vh",
          padding: "1.5rem 1rem",
          margin: "1rem 0",
          // gridTemplateRows: "400px",
        }}
      >
        {invoices.map((invoice) => (
          <InvoiceCard showModal={showModal} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

const DateInput = styled(Input)`
  width: 250px;
  color: red;
  /* margin-left: 80px; */
`;

const NameInput = styled(Input)`
  width: 250px;
  color: red;
  margin-left: 2rem;
`;
// const DateInput = styled(Input)`
//   width: 250px;
//   color: red;
// `;

const NewBtn = styled(Button)`
  /* justify-self: center; */
  /* height: 50px;
  width: 120px; */
`;
export const invoices1 = [];

export default Invoice;
