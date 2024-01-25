import { Modal } from "antd";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import Input from "../../components/ant-design/form/Input";
import { useEffect, useState } from "react";
import type { DatePickerProps } from "antd";
import DatePicker from "../../components/ant-design/form/DatePicker";
import useSignQuote from "../../../hooks/invoices/useSignQuote";
import PrimaryButton from "../../components/ant-design/buttons/PrimaryButton";
import moment from "moment";
import dayjs from "dayjs";
import { formatDate } from "../../../util/helpers";
const initialState = {
  expense: 0,
  signature_date: null,
};
export default function SignModal({
  isSignModalOpen,
  closeSignModal,
  currentInvoice,
}: any) {
  const [input, setInput] = useState<any>(initialState);
  const handleInputChange = (key: string) => (e: any) => {
    setInput((i: any) => ({ ...i, [key]: e.target.value }));
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setInput((i: any) => ({ ...i, signature_date: formatDate(dateString) }));
  };

  const add = useSignQuote(currentInvoice, () => {
    setInput(initialState);
    closeSignModal();
  });

  useEffect(() => {
    setInput(initialState);
  }, [isSignModalOpen]);

  return (
    <Modal
      title={"Signed"}
      open={isSignModalOpen}
      onCancel={closeSignModal}
      footer={() => (
        <div className="flex justify-end ">
          <SecondaryButton className="mr-2" onClick={closeSignModal}>
            Cancel
          </SecondaryButton>
          <PrimaryButton
            onClick={() => {
              add.mutate(input);
            }}
          >
            Submit
          </PrimaryButton>
        </div>
      )}
    >
      <div className="my-4 w-full">
        <div>Signature Date </div>
        <DatePicker
          onChange={onChange}
          className="w-full"
          style={{ width: "100%" }}
          value={
            input?.signature_date ? dayjs(input?.signature_date) : undefined
          }
        />
      </div>
      <div className="my-4  w-full">
        <div>Expense</div>
        <Input
          type="number"
          min={0}
          onChange={handleInputChange("expense")}
          allowClear
          value={input?.expense}
        />
      </div>
    </Modal>
  );
}
