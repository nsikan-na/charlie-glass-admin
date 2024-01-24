import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification/interface';
import { EColors } from '../../../../util/enums/colors';
import { CloseCircleOutlined } from '@ant-design/icons';

const showErrorNotification = ({
  description,
  ...props
}: {
  description: string;
  props?: ArgsProps;
}) =>
  notification.error({
    message: 'Error',
    description,
    icon: <CloseCircleOutlined style={{ color: EColors.red_6 }} />,
    ...props
  });

export default showErrorNotification;
