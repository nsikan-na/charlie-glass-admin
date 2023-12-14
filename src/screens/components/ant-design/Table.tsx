import { Table as AntTable, TableProps } from "antd";
import styled from "styled-components";
import _ from "lodash";

interface AntTableProps<T> extends TableProps<T> {
  dataSource: T[];
}

const Table = <T extends object>({
  dataSource: data,
  ...props
}: AntTableProps<T>) => {
  const dataSource = data.map((item) => ({
    ...item,
    key: _.uniqueId(),
  }));

  return (
    <AntTable
      className=""
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

export default Table;
