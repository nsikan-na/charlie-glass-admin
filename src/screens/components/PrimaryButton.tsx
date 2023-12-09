import { Button } from "antd";
import styled from "styled-components";
const PrimaryButton = ({ ...props }) => {
  return <StyledButton {...props} />;
};
export default PrimaryButton;

const StyledButton = styled(Button)``;
