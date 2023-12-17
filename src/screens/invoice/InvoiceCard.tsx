import { Card, Space } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";
import InvoiceModal from "../modals/InvoiceModal";
import { formatDate } from "../../util/helpers";

export default function InvoiceCard({
  setCurrentInvoice,
  invoice,
  showModal,
}: any) {
  function handleClick() {
    // setCurrentInvoice((i: any) => {
    //   const {
    //     invoice_creation_date,
    //     receiver_name,
    //     invoice_services,
    //     user_id,
    //     ...rest
    //   } = invoice;
    //   return {
    //     invoiceid: rest.invoice_id,
    //   };
    // });
    setCurrentInvoice(invoice.invoice_id);
  }

  return (
    <div>
      <></>
      <Card
        onClick={handleClick}
        style={{ width: 350, margin: ".5rem 1rem" }}
        title={
          <div style={{ fontWeight: 400, fontSize: ".9rem" }}>
            {formatDate(invoice?.invoice_creation_date)}
          </div>
        }
        actions={[
          <CaretRightOutlined
            onClick={showModal}
            style={{ fontSize: "1.5rem" }}
          />,
        ]}
      >
        <div>
          <div
            style={{
              //   display: "flex",
              textAlign: "center",
              width: "100%",
              height: "6rem",
              //   backgroundColor: "red",
            }}
          >
            <div style={{ marginTop: "1rem" }}>{invoice?.receiver_name}</div>
            <div>{invoice?.invoice_id}</div>
            <div
              style={{
                display: "grid",
                // backgroundColor: "red",
                justifyContent: "center",
                marginTop: "1rem",
                gridTemplateColumns: "4rem 4rem 4rem",
              }}
            >
              {invoice?.invoice_services?.map((service: any) => (
                <div>{service} </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
