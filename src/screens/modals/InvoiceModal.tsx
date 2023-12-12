import { Button, Modal } from "antd";
import { useState } from "react";
import PdfTemplate from "../../util/pdf/PdfTemplate";

export default function InvoiceModal({ isModalOpen, closeModal }: any) {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      width={"90%"}
      // onOk={handleOk}
      onCancel={closeModal}
      footer={() => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button>Email</Button>
            <Button>Download</Button>
            <Button onClick={closeModal}>Cancel</Button>
          </div>
        );
      }}
    >
      <PdfTemplate />
    </Modal>
  );
}
