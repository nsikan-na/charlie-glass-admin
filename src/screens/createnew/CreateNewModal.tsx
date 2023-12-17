import { Button, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/ant-design/form/Input";
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
    closeModal();
  }

  return (
    <>
      <Modal
        title="Add to Cart"
        style={{}}
        onCancel={closeModal}
        open={isModalOpen}
        footer={() => {
          return (
            <div className="flex justify-end">
              <Button onClick={closeModal}>Cancel</Button>

              <Button type="primary" onClick={handleSave}>
                Save
              </Button>
            </div>
          );
        }}
      >
        <div className="grid grid-rows-3 gap-4">
          {/* <div style={{ justifySelf: "center" }}>Filler Title</div> */}
          <Input
            label="Description"
            placeholder="Description"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
          />
          <Input
            label="Quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e: any) => setQuantity(+e.target.value)}
          />
          <Input
            label="Price"
            placeholder="Price"
            value={price}
            onChange={(e: any) => setPrice(e.target.value)}
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
