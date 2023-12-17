import { Input } from "antd";
import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { uniqueId } from "lodash";
import { Link } from "react-router-dom";
import AddedToCart from "./AddedToCart";
import PrimaryButton from "../components/ant-design/buttons/PrimaryButton";
import { ERoute } from "../../routing/helpers";
import SecondaryButton from "../components/ant-design/buttons/SecondaryButton";
import CreateNewInvoiceModal from "../modals/invoice/CreateNewModal";
import useAddNewInvoice from "../../hooks/invoices/useAddNewInvoice";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function InvoiceServicesInput({
  setInvoice,
  invoice,
  setCart,
  cartItems,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [checkedServices, setCheckedServices] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onChange = (checkedValue: any) => {
    setCheckedServices(checkedValue);
  };
  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, services: checkedServices }));
  }, [checkedServices, setInvoice]);

  const add = useAddNewInvoice();

  return (
    <>
      <CreateNewInvoiceModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        setCart={setCart}
        cartItems={cartItems}
        setInvoice={setInvoice}
      />
      <div
        style={{
          marginTop: "4rem",
          display: "grid",
          gridTemplateRows: "4rem 9rem 2rem",
        }}
      >
        <div style={{ justifySelf: "center" }}>Services</div>
        <div style={{ justifySelf: "center" }}>
          <Checkbox.Group
            onChange={onChange}
            value={checkedServices}
            style={{
              display: "grid",
              gridTemplateColumns: "12rem 12rem 12rem",
            }}
          >
            {services.map((service) => (
              <Checkbox key={uniqueId()} value={service.id}>
                {service.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </div>
        <div style={{ justifySelf: "center" }}>Current Items</div>
        {cartItems.map((item: any) => (
          <AddedToCart
            description={item.description}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
        <div className="mt-8" style={{ justifySelf: "center" }}>
          <SecondaryButton onClick={showModal}>Add Item</SecondaryButton>
        </div>
        <div style={{ justifySelf: "end" }}>
          <Link to={ERoute.INVOICE}>
            <PrimaryButton
              style={{ marginRight: "10rem" }}
              onClick={() => add.mutate(invoice)}
            >
              Submit
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </>
  );
}

const services = [
  { id: 22, label: "ServiceA" },
  { id: 433, label: "ServiceB" },
  { id: 3232, label: "ServiceC" },
  { id: 2323, label: "ServiceD" },
  { id: 9999, label: "ServiceE" },
  { id: 21121, label: "ServiceF" },
];

const myBody = {
  receiver_name: "Juice Wrld",
  street: "456 Oak St",
  city: "Townsville",
  state: "NY",
  zip: "54321",
  cart: [
    {
      description: "Product C",
      quantity: 3,
      price: "9.99",
    },
    {
      description: "Product A",
      quantity: 3,
      price: "9.99",
    },
  ],
  services: [27, 28],
};
