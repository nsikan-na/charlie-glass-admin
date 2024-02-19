import { Modal } from "antd";
import PrimaryButton from "../../components/ant-design/buttons/PrimaryButton";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import RangePicker from "../../components/ant-design/form/RangePicker";

import Input from "../../components/ant-design/form/Input";
import { Selector } from "../../components/ant-design/form/Select";
import dayjs from "dayjs";
import { useEffect } from "react";

export default function MobileFiltersModal({
  isOpen,
  closeModal,
  onRangeFilterChange,
  handleOnClose,
  filters,
  onFilterChange,
  handleSelectFilter,
}: any) {
  useEffect(() => {}, [isOpen]);
  return (
    <Modal
      title={"Filters"}
      open={isOpen}
      onCancel={closeModal}
      footer={() => (
        <>
          <div className="flex justify-end">
            <PrimaryButton onClick={handleOnClose}>Apply</PrimaryButton>
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
          </div>
        </>
      )}
    >
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-y-4">
          <div className="flex justify-between">
            <RangePicker
              onChange={onRangeFilterChange}
              value={
                filters?.fromDate && filters?.toDate
                  ? [dayjs(filters?.fromDate), dayjs(filters?.toDate)]
                  : undefined
              }
            />
          </div>
          <div className="flex justify-between">
            <Input
              addonBefore="Id"
              className="w-72 "
              onChange={onFilterChange("invoice_id")}
            />
          </div>
          <div className="flex justify-between">
            <Input
              addonBefore="Name"
              className="w-72"
              onChange={onFilterChange("name")}
            />
          </div>
          <div className="flex justify-between">
            <Selector
              onChange={handleSelectFilter("isSigned")}
              className="w-40"
              defaultValue="All"
              style={{ width: 120 }}
              options={[
                { label: "All", value: "undefined" },
                { label: "Quote", value: false },
                { label: "Invoice", value: true },
              ]}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
