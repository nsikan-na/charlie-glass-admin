import { Button as AntButton, ButtonProps } from "antd";

interface AntButtonProps extends ButtonProps {}

const Button = ({ ...props }: AntButtonProps) => {
  return (
    <AntButton
      {...props}
      // className={`bg-sky-400 text-white hover:bg-sky-300 hover:text-white`}
    />
  );
};
export default Button;
