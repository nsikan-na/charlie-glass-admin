import { LoadingOutlined } from '@ant-design/icons';
import { Spin as LoadingSpinner } from 'antd';

const Spinner = ({ ...props }: any) => {
  return (
    <LoadingSpinner
      {...props}
      className=""
      indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
    />
  );
};
export default Spinner;
