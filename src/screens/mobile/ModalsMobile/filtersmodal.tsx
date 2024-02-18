import { Modal } from "antd";
import PrimaryButton from "../../components/ant-design/buttons/PrimaryButton";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import Input from "../../components/ant-design/form/Input";
import { useEffect, useState } from "react";

export default function MobileFiltersModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const [input, setInput] = useState({});

  const handleInputChange = (key: string) => (e: any) => {
    setInput((i) => ({ ...i, [key]: e.target.value }));
  };

  return (
    <Modal
      title={"Filters"}
      open={isOpen}
      onCancel={closeModal}
      footer={() => (
        <>
          <div className="flex justify-end">
            <PrimaryButton onClick={closeModal}>Apply</PrimaryButton>
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
          </div>
        </>
      )}
    >
      <div>Name</div>
      <Input onChange={handleInputChange("receiver_name")} className="w-72" />
      <div>Street</div>
      <Input onChange={handleInputChange("street")} className="w-72" />
      <div>City</div>
      <Input onChange={handleInputChange("city")} className="w-72" />
      <div className="flex justify-between">
        <div>
          <div>State</div>
          <Input onChange={handleInputChange("state")} className="w-1/2" />
        </div>
        <div>
          <div>Zip</div>
          <Input onChange={handleInputChange("zip")} className="w-1/2" />
        </div>
      </div>
    </Modal>
  );
}
