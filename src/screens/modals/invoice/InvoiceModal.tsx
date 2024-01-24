import { Button, Modal } from "antd";

import PdfTemplate from "./pdf/PdfTemplate";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import Spinner from "../../components/ant-design/loading/spinner";

export default function InvoiceModal({
  isModalOpen,
  closeModal,
  pdf,
  isLoading,
}: any) {
  return (
    <Modal
      title={<div className="invisible">.</div>}
      open={isModalOpen}
      width={"60%"}
      onCancel={closeModal}
      footer={() => (
        <div className="flex justify-end">
          <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
        </div>
      )}
    >
      <Spinner spinning={isLoading}>
        <PdfTemplate invoiceData={pdf as any} />
      </Spinner>
    </Modal>
  );
}
