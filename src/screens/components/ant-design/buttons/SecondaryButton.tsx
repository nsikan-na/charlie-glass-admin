import { Button as AntButton, ButtonProps } from "antd";

interface AntButtonProps extends ButtonProps {}

const SecondaryButton = ({ ...props }: AntButtonProps) => {
  return <AntButton {...props} className="" />;
};
export default SecondaryButton;
