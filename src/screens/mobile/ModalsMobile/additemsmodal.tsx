import { useEffect, useState } from "react";
import showErrorNotification from "../../components/ant-design/notifications/showErrorNotification";
import { Input, Modal } from "antd";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import PrimaryButton from "../../components/ant-design/buttons/PrimaryButton";

export default function AddMobileItemsModal({
  closeModal,
  isModalOpen,
  setCart,
}: any) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  function handleSave() {
    if (!description || !quantity || !price)
      return showErrorNotification({
        description: "Please complete all fields",
      });

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
            value={quantity || undefined}
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
            value={price || undefined}
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
