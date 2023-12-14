import { Input as AntInput } from "antd";
import { InputProps } from "antd/lib/input";
interface AntInputProps extends InputProps {
  text?: string;
}

const Input = ({ text, ...props }: AntInputProps) => {
  return <AntInput allowClear {...props} className="w-48" />;
};

export default Input;
