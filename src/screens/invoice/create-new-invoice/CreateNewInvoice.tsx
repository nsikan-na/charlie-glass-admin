import InvoiceDetailsInput from "./NewInvoiceDetails";
import InvoiceServicesInput from "./CreateNewService";
import { useEffect, useState } from "react";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";

export default function CreateNewInvoice({ handleIsCreateScreenOpen }: any) {
  const [cartItems, setCart]: any = useState([]);

  const [invoice, setInvoice]: any = useState({
    receiver_name: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    items: [],
    services: [],
  });

  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, items: cartItems }));
  }, [cartItems]);

  return (
    <div className="px-52 py-8">
      <div
        style={{
          width: "70%",
        }}
      >
        <SecondaryButton onClick={handleIsCreateScreenOpen}>
          Back
        </SecondaryButton>
      </div>
      <div
        style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}
      >
        <div style={{ textAlign: "justify" }} className="text-2xl">
          Create New Invoice
        </div>
      </div>
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
    </div>
  );
}
