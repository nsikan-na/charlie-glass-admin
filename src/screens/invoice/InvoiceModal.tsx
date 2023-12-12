import { Button, Modal } from "antd";
import { useState } from "react";

export default function InvoiceModal({ isModalOpen, closeModal }: any) {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
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
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
