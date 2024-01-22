import { Table as AntTable, TableProps } from "antd";
import _ from "lodash";

interface AntTableProps<T> extends TableProps<T> {
  noScroll: boolean;
  dataSource: T[];
  columns: [];
}

const Table = <T extends object>({
  noScroll,
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
      scroll={{
        x: !noScroll ? "100%" : undefined,
        y: !noScroll ? "50vh" : undefined,
      }}
      {...props}
      dataSource={dataSource}
    />
  );
};

export default Table;
