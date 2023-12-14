import { Input as AntInput } from "antd";
import styled from "styled-components";

const Input = ({ ...props }) => {
  return <InputStyled allowClear {...props} />;
};

export default Input;

const InputStyled = styled(AntInput)`
  width: 300px;
`;
