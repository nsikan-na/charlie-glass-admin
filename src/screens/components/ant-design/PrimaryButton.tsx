import { Button as AntButton, ButtonProps } from "antd";
import styled from "styled-components";

interface AntButtonProps extends ButtonProps {}

const Button = ({ ...props }: AntButtonProps) => {
  return <PrimaryButton {...props} />;
};
export default Button;

const PrimaryButton = styled(AntButton)``;
