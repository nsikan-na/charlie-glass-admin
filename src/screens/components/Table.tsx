import { Table as AntTable } from "antd";
import styled from "styled-components";
import _ from "lodash";
const Table = ({ dataSource: data, ...props }: any) => {
  const dataSource = data.map((item: any) => ({
    ...item,
    key: _.uniqueId(),
  }));
  return (
    <StyledTable
      size="small"
      dataSource={dataSource}
      scroll={{
        x: "100%",
        y: "60vh",
      }}
      {...props}
    />
  );
};

const StyledTable = styled(AntTable)``;

export default Table;
