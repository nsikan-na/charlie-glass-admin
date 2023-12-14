import { Button as AntButton, ButtonProps } from "antd";
import styled from "styled-components";

interface AntButtonProps extends ButtonProps {}

const Button = ({ ...props }: AntButtonProps) => {
  return <SecondaryButton {...props} />;
};
export default Button;

const SecondaryButton = styled(AntButton)``;
