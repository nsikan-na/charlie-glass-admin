import { notification } from "antd";
import { ArgsProps } from "antd/lib/notification/interface";
import { EColors } from "../../util/enums/colors";
import { CheckCircleOutlined } from "@ant-design/icons";

const showSuccessNotification = ({
  description,
  ...props
}: {
  description: string;
  props?: ArgsProps;
}) =>
  notification.success({
    message: "Success",
    description,
    icon: <CheckCircleOutlined style={{ color: EColors.green_6 }} />,
    ...props,
  });

export default showSuccessNotification;
