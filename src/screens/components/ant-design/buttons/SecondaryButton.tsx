import { Button as AntButton, ButtonProps } from "antd";

interface AntButtonProps extends ButtonProps {}

const SecondaryButton = ({ ...props }: AntButtonProps) => {
  return (
    <AntButton
      {...props}
      // className={`text-sky-400 border-sky-400 `}
    />
  );
};
export default SecondaryButton;
