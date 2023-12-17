import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import SecondaryButton from "./SecondaryButton";

export const SearchButton = ({ ...props }: any) => {
  return <SecondaryButton {...props} className="" icon={<SearchOutlined />} />;
};
