import styled from "styled-components";
import { Card, Space } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

export default function CardComponent({ invoice }: any) {
  console.log(invoice);

  return (
    <Space direction="vertical" size={20}>
      <Card
        //   key={uniqueId()}
        style={{ width: 350, margin: ".5rem 1rem" }}
        title={
          <div style={{ fontWeight: 400, fontSize: ".9rem" }}>
            {invoice.date}
          </div>
        }
        actions={[
          <CaretRightOutlined style={{ fontSize: "1.5rem" }} />,
          // <PlayCircleOutlined
          //   style={{ fontSize: "1.5rem" }}
          //   onClick={() => showModal(item)}
          // />,
        ]}
      >
        <div>
          <div
            style={{
              //   display: "flex",
              textAlign: "center",
              width: "100%",
              height: "15rem",
              //   backgroundColor: "red",
            }}
          >
            <div style={{ marginTop: "1rem" }}>{invoice.name}</div>
            <div>{invoice.invoiceNumber}</div>
            <div
              style={{
                display: "grid",
                backgroundColor: "red",

                gridTemplateColumns: "4rem 4rem 4rem",
              }}
            >
              {invoice.services.map((service: any) => (
                <div>{service} </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Space>
  );
}
