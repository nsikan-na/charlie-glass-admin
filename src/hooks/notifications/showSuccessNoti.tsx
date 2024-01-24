import { notification } from "antd";
import { ArgsProps } from "antd/lib/notification";

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
    ...props,
  });

export default showSuccessNotification;
