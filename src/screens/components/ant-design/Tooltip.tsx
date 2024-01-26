import { Tooltip as AntTooltip, TooltipProps } from "antd";
import { EColors } from "../../../util/enums/colors";

const Tooltip = ({ ...props }: TooltipProps) => {
  return (
    <AntTooltip
      {...props}
      className=""
      overlayInnerStyle={{
        color: "black",
        backgroundColor: "white",
        border: `1px solid ${EColors.primary}`,
      }}
    />
  );
};
export default Tooltip;
