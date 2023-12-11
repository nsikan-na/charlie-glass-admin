import { Input } from "antd";
import styled from "styled-components";
import styles from "./Invoice.module.css";
import { Button } from "antd";
import { Card, Space } from "antd";
import CardComponent from "./InvoiceCard";

const Invoice = (): JSX.Element => {
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
  ];

  return (
    <div>
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
          <CardComponent invoice={invoice} />
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

export default Invoice;
