import { Button, Modal } from "antd";

import PdfTemplate from "../../util/pdf/PdfTemplate";

export default function InvoiceModal({ isModalOpen, closeModal }: any) {
  return (
    <Modal
      open={isModalOpen}
      width={"60%"}
      onCancel={closeModal}
      footer={() => {
        return (
          <div className="flex justify-center">
            <Button onClick={closeModal}>Cancel</Button>
          </div>
        );
      }}
    >
      {/* <PdfTemplate data={} /> */}
    </Modal>
  );
}
