import { Button as AntButton, ButtonProps } from "antd";
import { EColors } from "../../../../util/enums/colors";

interface AntButtonProps extends ButtonProps {}

const SecondaryButton = ({ ...props }: AntButtonProps) => {
  return (
    <AntButton
      {...props}
      className=""
      style={{
        backgroundColor: "white",
        color: EColors.primary,
        borderColor: EColors.primary,
      }}
    />
  );
};
export default SecondaryButton;
