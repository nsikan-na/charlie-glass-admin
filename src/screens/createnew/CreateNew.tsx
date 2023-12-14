import { Input } from "antd";
import styled from "styled-components";
import { Button } from "antd";
import InvoiceDetailsInput from "./NewInvoiceDetails";
import InvoiceServicesInput from "./CreateNewService";
import { useEffect, useState } from "react";

export default function CreateNewInvoice() {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [cartItems, setCart]: any = useState([]);

  const [invoice, setInvoice]: any = useState({
    receiver_name: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    cart: [],
    services: [27, 28],
  });

  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, cart: cartItems }));
  }, [cartItems]);

  return (
    <>
      <div
        style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}
      >
        <div style={{ textAlign: "justify" }}>Create New</div>
      </div>

      {/*
       */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "8rem ",
            marginTop: "3rem",
            width: "70%",
            marginRight: "0",
          }}
        >
          <InvoiceDetailsInput
            setInvoice={setInvoice}
            invoice={invoice}
            setName={setName}
            setStreet={setStreet}
            setCity={setCity}
            setState={setState}
            setZip={setZip}
          />
          <InvoiceServicesInput
            setInvoice={setInvoice}
            invoice={invoice}
            setCart={setCart}
            cartItems={cartItems}
          />
        </div>
      </div>
    </>
  );
}
