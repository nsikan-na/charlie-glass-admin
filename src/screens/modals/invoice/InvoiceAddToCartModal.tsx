import { Input, Modal } from "antd";
import { useEffect, useState } from "react";
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
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  function handleSave() {
    if (!description || !quantity || !price) return;
    const cartObj = {
      description,
      quantity,
      price,
    };
    setCart((cart: any) => [cartObj, ...cart]);
    closeModal();
  }

  useEffect(() => {
    setDescription("");
    setQuantity(0);
    setPrice(0);
  }, [isModalOpen]);

  return (
    <Modal
      title="Add to Cart"
      onCancel={closeModal}
      open={isModalOpen}
      footer={() => {
        return (
          <div className="flex justify-end ">
            <SecondaryButton className="mr-2" onClick={closeModal}>
              Cancel
            </SecondaryButton>
            <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
          </div>
        );
      }}
    >
      <div>
        <div className="my-4">
          <div>Description</div>
          <Input.TextArea
            autoSize={{ minRows: 3 }}
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            className="w-full"
            allowClear
          />
        </div>
        <div className="my-4">
          <div>Quantity</div>
          <Input
            value={quantity}
            type="number"
            min={0}
            onChange={(e: any) => setQuantity(+e.target.value)}
            className="w-full"
            allowClear
          />
        </div>
        <div className="my-4">
          <div>Price</div>
          <Input
            value={price}
            type="number"
            onChange={(e: any) => setPrice(+e.target.value)}
            className="w-full"
            allowClear
          />
        </div>
      </div>
    </Modal>
  );
}
