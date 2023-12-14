import { Button, Modal, Input } from "antd";
import { useState } from "react";

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
            <div className="flex">
              <Button onClick={closeModal}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          );
        }}
      >
        <div className="grid grid-rows-3 gap-4">
          <Input
            className="w-1/2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            className="w-1/5"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
          <Input
            className="w-1/5"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
}

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
