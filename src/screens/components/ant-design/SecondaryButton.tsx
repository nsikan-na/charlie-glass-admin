import { Button as AntButton, ButtonProps } from "antd";

interface AntButtonProps extends ButtonProps {}

const Button = ({ ...props }: AntButtonProps) => {
  return <AntButton {...props} className="" />;
};
export default Button;
