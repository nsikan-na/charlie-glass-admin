import InvoiceDetailsInput from "./NewInvoiceDetails";
import InvoiceServicesInput from "./CreateNewService";
import { useEffect, useState } from "react";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import useQueryParam from "../../../hooks/queryParam/useQueryParam";
import { EInvoiceTabs, invoiceTabKey } from "../Main";

const initialInvoiceState = {
  receiver_name: null,
  street: null,
  city: null,
  state: null,
  zip: null,
  items: [],
  services: [],
};

export default function CreateNewInvoice({
  isCreateScreenOpen,
  setIsCreateScreenOpen,
}: any) {
  const [cartItems, setCart]: any = useState([]);

  const [invoice, setInvoice]: any = useState(initialInvoiceState);

  const { getQuery } = useQueryParam();

  useEffect(() => {
    setInvoice(initialInvoiceState);
    setCart([]);
  }, [isCreateScreenOpen]);

  useEffect(() => {
    getQuery(invoiceTabKey) !== EInvoiceTabs.LISTING &&
      setIsCreateScreenOpen(false);
  }, [getQuery(invoiceTabKey)]);

  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, items: cartItems }));
  }, [cartItems]);

  return (
    <div className="px-52 py-2">
      <div
        style={{
          width: "70%",
        }}
      >
        <SecondaryButton onClick={() => setIsCreateScreenOpen(false)}>
          Back
        </SecondaryButton>
      </div>
      <div
        style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
      >
        <div style={{ textAlign: "justify" }} className="text-2xl">
          Create New Quote
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "8rem ",
            marginTop: "1rem",
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
            setIsCreateScreenOpen={setIsCreateScreenOpen}
          />
        </div>
      </div>
    </div>
  );
}
