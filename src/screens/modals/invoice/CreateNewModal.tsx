import { Button, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/ant-design/form/Input";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import PrimaryButton from "../../components/ant-design/buttons/PrimaryButton";
export default function CreateNewInvoiceModal({
  closeModal,
  isModalOpen,
  setCart,
  cartItems,
  setInvoice,
}: any) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState<number>();
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
    <Modal
      title="Add to Cart"
      onCancel={closeModal}
      open={isModalOpen}
      footer={() => {
        return (
          <div className="flex justify-end">
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

            <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
          </div>
        );
      }}
    >
      <div className="grid grid-rows-3 gap-4">
        <Input
          label="Description"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <Input
          label="Quantity"
          value={quantity}
          onChange={(e: any) => setQuantity(+e.target.value)}
        />
        <Input
          label="Price"
          value={price}
          onChange={(e: any) => setPrice(e.target.value)}
        />
      </div>
    </Modal>
  );
}
