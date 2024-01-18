import { Button, Modal } from "antd";

import PdfTemplate from "./pdf/PdfTemplate";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";

export default function InvoiceModal({ isModalOpen, closeModal, pdf }: any) {
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
      <PdfTemplate invoiceData={pdf as any} />
    </Modal>
  );
}
