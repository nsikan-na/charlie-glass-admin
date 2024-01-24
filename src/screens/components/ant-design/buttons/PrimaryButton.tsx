import { Button as AntButton, ButtonProps } from 'antd';
import { EColors } from '../../../../util/enums/colors';

interface AntButtonProps extends ButtonProps {}

const Button = ({ ...props }: AntButtonProps) => {
  return (
    <AntButton
      {...props}
      className=""
      style={{ backgroundColor: EColors.primary, color: 'white' }}
    />
  );
};
export default Button;
