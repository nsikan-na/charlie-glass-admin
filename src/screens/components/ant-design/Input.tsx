import { Input as AntInput } from "antd";
import styled from "styled-components";
import { InputProps } from "antd/lib/input";
interface AntInputProps extends InputProps {
  text?: string;
}

const Input = ({ text, ...props }: AntInputProps) => {
  return <InputStyled allowClear {...props} />;
};

export default Input;

const InputStyled = styled(AntInput)`
  width: 300px;
`;
