import { Input as AntInput } from "antd";
import { InputProps } from "antd/lib/input";
interface AntInputProps extends InputProps {
  label?: string;
}

const Input = ({ label, ...props }: AntInputProps) => {
  return (
    <AntInput addonBefore={label} allowClear {...props} className="w-60" />
  );
};

export default Input;
