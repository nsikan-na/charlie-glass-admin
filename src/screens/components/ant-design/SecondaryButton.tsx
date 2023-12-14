import { Button as AntButton } from "antd";
import styled from "styled-components";

const Button = ({ ...props }: any) => {
  return <SecondaryButton {...props} />;
};
export default Button;

const SecondaryButton = styled(AntButton)``;
