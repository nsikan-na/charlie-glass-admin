import { Input } from "antd";
import styled from "styled-components";
import { Button } from "antd";
import { Card, Space } from "antd";
import InvoiceCard from "./InvoiceCard";
import InvoiceModal from "./InvoiceModal";
import { useState } from "react";

const Invoice = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
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
        <NewBtn type="primary">New</NewBtn>
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
const invoices = [
  {
    date: "2000-02-21",
    name: "Shawn Montgomery",
    services: ["Glass", "Storefront", "Mirror", "x", "y", "z", "a"],
    invoiceNumber: 12345,
  },
  {
    date: "1999-07-22",
    name: "Nsikan Kpan",
    services: ["Glass", "Storefront", "Mirror"],
    invoiceNumber: 54321,
  },
  {
    date: "2006-10-99",
    name: "Jon Vaylin",
    services: ["Glass", "Storefront"],
    invoiceNumber: 434341,
  },
  {
    date: "2006-10-99",
    name: "Jon Vaylin",
    services: ["Glass", "Storefront"],
    invoiceNumber: 434341,
  },
  {
    date: "2006-10-99",
    name: "Jon Vaylin",
    services: ["Glass", "Storefront"],
    invoiceNumber: 434341,
  },
  {
    date: "2006-10-99",
    name: "Jon Vaylin",
    services: ["Glass", "Storefront"],
    invoiceNumber: 434341,
  },
  {
    date: "2006-10-99",
    name: "Jon Vaylin",
    services: ["Glass", "Storefront"],
    invoiceNumber: 434341,
  },
];

export default Invoice;
