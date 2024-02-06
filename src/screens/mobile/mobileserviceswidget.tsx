import { Column } from "@ant-design/charts";
import Spinner from "../components/ant-design/Spinner";
import Empty from "../components/ant-design/Empty";
import useGetReportServices from "../../hooks/reports/useGetReportServices";

export default function MobileServicesWidget({ input }: any) {
  const { data, isLoading } = useGetReportServices(input);

  const config = {
    data:
      data?.data?.content?.map((x: any) => ({
        ...x,
        Count: Number(x.service_count),
      })) || [],
    xField: "service_label",
    yField: "Count",
  };

  return (
    <div className="w-full flex justify-center ">
      {(!data || data?.data?.content?.length === 0) && !isLoading ? (
        <div className="flex justify-center items-center mt-12">
          <Empty />
        </div>
      ) : (
        <Spinner spinning={isLoading}>
          <Column className="w-3/4" {...config} />
        </Spinner>
      )}
    </div>
  );
}
