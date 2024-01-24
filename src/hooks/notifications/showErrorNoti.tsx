import { notification } from "antd";
import { ArgsProps } from "antd/lib/notification/interface";

const showErrorNotification = ({
  description,
  ...props
}: {
  description: string;
  props?: ArgsProps;
}) =>
  notification.error({
    message: "Error",
    description,
    ...props,
  });

export default showErrorNotification;
