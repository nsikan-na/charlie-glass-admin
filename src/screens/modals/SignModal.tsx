import { Modal } from "antd";
import SecondaryButton from "../components/ant-design/buttons/SecondaryButton";
import Input from "../components/ant-design/form/Input";
import { useState } from "react";
import type { DatePickerProps } from "antd";
import DatePicker from "../components/ant-design/form/DatePicker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSignQuote from "../../hooks/invoices/useSignQuote";

export default function SignModal({
  isSignModalOpen,
  closeSignModal,
  currentInvoice,
}: any) {
  const [input, setInput] = useState({
    expense: 0,
    signature_date: "",
  });
  const handleInputChange = (key: string) => (e: any) => {
    setInput((i) => ({ ...i, [key]: e.target.value }));
  };
  const onChange: DatePickerProps["onChange"] = (key: any, dateString) => {
    setInput((i) => ({ ...i, signature_date: dateString }));
    console.log(dateString);
  };

  const add = useSignQuote(currentInvoice);

  return (
    <Modal
      title={"Signed"}
      open={isSignModalOpen}
      width={"60%"}
      onCancel={closeSignModal}
      footer={() => (
        <div className="flex justify-end">
          <SecondaryButton
            onClick={() => {
              add.mutate(input);
              closeSignModal();
            }}
          >
            Submit
          </SecondaryButton>
        </div>
      )}
    >
      <div>
        <Input
          type="number"
          min={0}
          onChange={handleInputChange("expense")}
          className="w-40"
          allowClear
        />
        <DatePicker onChange={onChange} />
      </div>
    </Modal>
  );
}
