import { Column } from '@ant-design/plots';

import useGetReportServices from '../../../hooks/reports/useGetReportServices';

import Spinner from '../../components/ant-design/loading/spinner';
import Empty from '../../components/ant-design/loading/empty';

export default function ServicesWidget({ input }: any) {
  const { data, isLoading } = useGetReportServices(input);

  const config = {
    data: data?.data || [],
    xField: 'service_label',
    yField: 'service_count',
    label: {
      style: {
        fill: '#FFFFFF',
        opacity: 0.6
      }
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    }
  };

  return (
    <div className="w-full">
      {(!data || data?.data?.length === 0) && !isLoading ? (
        <div className="flex justify-center items-center mt-12">
          <Empty />
        </div>
      ) : (
        <Spinner spinning={isLoading}>
          <Column {...config} />
        </Spinner>
      )}
    </div>
  );
}
