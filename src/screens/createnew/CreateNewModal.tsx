import { Button, Modal, Input } from "antd";
import styled from "styled-components";
import { invoices1 } from "../invoice/Invoice";
import { useEffect, useRef, useState } from "react";
import useAddNewInvoice from "../../hooks/invoices/useAddNewInvoice";

export default function CreateNewInvoiceModal({
  closeModal,
  isModalOpen,
  setCart,
  cartItems,
  setInvoice,
}: any) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState("");

  function handleSave() {
    const cartObj = {
      description,
      quantity,
      price,
    };
    setCart((cart: any) => [cartObj, ...cart]);
    console.log(cartItems);
  }

  return (
    <>
      <Modal
        width={"70%"}
        style={{
          height: "50rem",
        }}
        onCancel={closeModal}
        open={isModalOpen}
        footer={() => {
          return (
            <div>
              <Button onClick={closeModal}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          );
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateRows: "5rem 3rem 3rem",
            gap: "1rem",
          }}
        >
          <DescriptionInput
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <QuanityInput
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
          <PriceInput
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
}

const DescriptionInput = styled(Input)`
  width: 50%;
`;

const QuanityInput = styled(Input)`
  width: 20%;
`;
const PriceInput = styled(Input)`
  width: 20%;
`;
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
