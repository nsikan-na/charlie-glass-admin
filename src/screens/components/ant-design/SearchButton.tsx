import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

export const SearchButton = ({ ...props }: any) => {
  return (
    <Tooltip title="Search">
      <Button
        {...props}
        className="bg-blue-500 hover:bg-blue-600 text-white"
        icon={<SearchOutlined />}
      />
    </Tooltip>
  );
};
