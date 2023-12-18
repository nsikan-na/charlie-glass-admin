import { Input } from "antd";
import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { uniqueId } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import AddedToCart from "./AddedToCart";
import PrimaryButton from "../components/ant-design/buttons/PrimaryButton";
import { ERoute } from "../../routing/helpers";
import SecondaryButton from "../components/ant-design/buttons/SecondaryButton";
import CreateNewInvoiceModal from "../modals/invoice/InvoiceAddToCartModal";
import useAddNewInvoice from "../../hooks/invoices/useAddNewInvoice";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function InvoiceServicesInput({
  setInvoice,
  invoice,
  setCart,
  cartItems,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
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
      <div className="my-10 text-center">
        <div style={{ justifySelf: "center" }}>Services</div>
        <div className="flex justify-center mt-4">
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
      </div>
      <div className="my-10">
        {cartItems > 0 ? (
          <div style={{ justifySelf: "center" }}>Current Items</div>
        ) : null}
        <div className="">
          {cartItems?.map((item: any) => (
            <AddedToCart
              description={item.description}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <SecondaryButton onClick={showModal}>Add Item</SecondaryButton>
      </div>
      <div style={{ justifySelf: "end" }}>
        <PrimaryButton
          style={{ marginRight: "10rem" }}
          onClick={() => {
            add.mutate(invoice);
            navigate(ERoute.INVOICE);
          }}
        >
          Submit
        </PrimaryButton>
      </div>
    </>
  );
}

const services = [
  { id: 27, label: "Shower Doors" },
  { id: 28, label: "Shelves" },
  { id: 29, label: "Glass Partition" },
  { id: 30, label: "Store Fronts" },
  { id: 31, label: "Mirrors" },
  { id: 32, label: "Others" },
];
