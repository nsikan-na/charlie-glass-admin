import { Button, Modal } from "antd";
import PdfTemplate from "../../util/pdf/PdfTemplate";

export default function InvoiceModal({ isModalOpen, closeModal }: any) {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      width={"60%"}
      onCancel={closeModal}
      footer={() => {
        return (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={closeModal}>Cancel</Button>
          </div>
        );
      }}
    >
      <PdfTemplate />
    </Modal>
  );
}
