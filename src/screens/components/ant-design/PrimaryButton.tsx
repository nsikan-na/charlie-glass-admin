import { Button as AntButton } from "antd";
import styled from "styled-components";

const Button = ({ ...props }: any) => {
  return <PrimaryButton {...props} />;
};
export default Button;

const PrimaryButton = styled(AntButton)``;
