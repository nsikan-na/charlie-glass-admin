import { Button, Modal } from "antd";

import PdfTemplate from "../../../util/pdf/PdfTemplate";

export default function InvoiceModal({ isModalOpen, closeModal, pdf }: any) {
  return (
    <Modal
      title={<div className="invisible">.</div>}
      open={isModalOpen}
      width={"60%"}
      onCancel={closeModal}
      footer={() => {
        return (
          <div className="flex justify-end">
            <Button className="mr-12" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        );
      }}
    >
      <PdfTemplate invoiceData={pdf as any} />
    </Modal>
  );
}
