import styled from "styled-components";
import { Card, Space } from "antd";

export default function CardComponent() {
  return (
    <Space direction="vertical" size={16}>
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300, margin: "1rem 1rem 0 1rem " }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}
