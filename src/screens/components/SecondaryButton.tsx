import { Button } from "antd";
import styled from "styled-components";

const SecondaryButton = ({ ...props }) => {
  return <StyledButton {...props} />;
};
export default SecondaryButton;

const StyledButton = styled(Button)``;
