import { Column } from "@ant-design/plots";
import RangePicker from "../components/ant-design/form/RangePicker";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";
import { useEffect, useState } from "react";

import { Spin } from "antd";
import useGetReportServices from "../../hooks/reports/useGetReportServices";
import { LoadingOutlined } from "@ant-design/icons";

export default function ServicesWidget({ filters, setFilters, input }: any) {
  const { data, isLoading } = useGetReportServices(input);

  const [test, setTest] = useState(isLoading);
  useEffect(() => {
    setTest(isLoading);
  }, [isLoading]);

  const onRangeFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({ ...prev, fromDate: e[0], toDate: e[1] }));
  };
  const config = {
    data: data?.data,
    xField: "service_label",
    yField: "service_count",
    label: {
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return (
    <Spin
      size="large"
      spinning={test}
      indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
    >
      <div className="w-full">
        {!data ? (
          <div className="flex justify-center items-center mt-12"></div>
        ) : (
          <Column {...config} />
        )}
      </div>
    </Spin>
  );
}

//  indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
