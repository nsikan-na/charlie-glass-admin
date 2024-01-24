import { Input as AntInput } from "antd";
import { InputProps } from "antd/lib/input";
interface AntInputProps extends InputProps {}

const Input = ({ ...props }: AntInputProps) => {
  return <AntInput allowClear {...props} />;
};

export default Input;
