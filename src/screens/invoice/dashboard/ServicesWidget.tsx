import { Column } from "@ant-design/plots";

import useGetReportServices from "../../../hooks/reports/useGetReportServices";

import Spinner from "../../components/ant-design/Spinner";
import Empty from "../../components/ant-design/Empty";

export default function ServicesWidget({ input }: any) {
  const { data, isLoading } = useGetReportServices(input);

  const config = {
    data:
      data?.data?.content?.map((x: any) => ({
        ...x,
        Count: x.service_count,
      })) || [],
    xField: "service_label",
    yField: "Count",
  };

  return (
    <div className="w-full">
      {(!data || data?.data?.content?.length === 0) && !isLoading ? (
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
