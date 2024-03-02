import { Modal } from "antd";
import Input from "../../components/ant-design/form/Input";
import { Selector } from "../../components/ant-design/form/Select";

import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import PrimaryButton from "../../components/ant-design/buttons/PrimaryButton";

export default function FiltersModal({
  closeFiltersModal,
  isFilterModalOpen,
  handleSelectFilter,
  onFilterChange,
  handleFilterSubmit,
}: any) {
  return (
    <Modal
      title={"Filters"}
      open={isFilterModalOpen}
      onCancel={closeFiltersModal}
      footer={() => (
        <div className="flex justify-end gap">
          <div className="mr-2">
            <SecondaryButton onClick={closeFiltersModal}>
              Cancel
            </SecondaryButton>
          </div>
          <div>
            <PrimaryButton onClick={handleFilterSubmit}>Submit</PrimaryButton>
          </div>
        </div>
      )}
    >
      <div className="flex justify-center">
        <div className="mb-1">
          <Input
            addonBefore="Id"
            className="mb-3"
            onChange={onFilterChange("invoice_id")}
          />

          <div className=" mb-3">
            <Input
              addonBefore="Name"
              className=""
              onChange={onFilterChange("name")}
            />
          </div>
          <div className="w-full">
            <Selector
              style={{ width: "100%" }}
              onChange={handleSelectFilter("isSigned")}
              defaultValue="All"
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
