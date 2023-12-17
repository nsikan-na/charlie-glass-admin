// import { Input } from "antd";
import { Button } from "antd";
import InvoiceDetailsInput from "./NewInvoiceDetails";
import InvoiceServicesInput from "./CreateNewService";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ant-design/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../../routing/helpers";

export default function CreateNewInvoice() {
  const [cartItems, setCart]: any = useState([]);

  const [invoice, setInvoice]: any = useState({
    receiver_name: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    cart: [],
    services: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, cart: cartItems }));
  }, [cartItems]);

  return (
    <>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div className="">
          <PrimaryButton onClick={() => navigate(ERoute.INVOICE)}>
            Back
          </PrimaryButton>
        </div>
      </div>
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
          <InvoiceDetailsInput setCart={setCart} setInvoice={setInvoice} />
          <InvoiceServicesInput
            invoice={invoice}
            cartItems={cartItems}
            setCart={setCart}
            setInvoice={setInvoice}
          />
        </div>
      </div>
    </>
  );
}
