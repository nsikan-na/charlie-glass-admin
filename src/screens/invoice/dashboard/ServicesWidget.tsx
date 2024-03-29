import { Column, Bar } from "@ant-design/plots";

import useGetReportServices from "../../../hooks/reports/useGetReportServices";

import Spinner from "../../components/ant-design/Spinner";
import Empty from "../../components/ant-design/Empty";
import { EColors } from "../../../util/enums/colors";

export default function ServicesWidget({ input }: any) {
  const { data, isLoading } = useGetReportServices(input);

  const config = {
    data:
      data?.data?.content?.map((x: any) => ({
        ...x,
        Count: Number(x.service_count),
      })) || [],
    xField: "service_label",
    yField: "Count",
    style: {
      fill: EColors.primary,
    },
  };

  return (
    <div className=" mt-1 ">
      {(!data || data?.data?.content?.length === 0) && !isLoading ? (
        <div className="flex justify-center items-center mt-12">
          <Empty />
        </div>
      ) : (
        <>
          <div className="xl:hidden">
            <Spinner spinning={isLoading}>
              <Column {...config} />
            </Spinner>
          </div>
          <div className=" hidden xl:block">
            <Spinner spinning={isLoading}>
              <Bar {...config} />
            </Spinner>
          </div>
        </>
      )}
    </div>
  );
}
