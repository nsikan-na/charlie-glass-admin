import { Column } from "@ant-design/plots";

import { useEffect, useState } from "react";

import { Spin } from "antd";
import useGetReportServices from "../../hooks/reports/useGetReportServices";
import { LoadingOutlined } from "@ant-design/icons";
import Spinner from "../components/ant-design/loading/spinner";
import Empty from "../components/ant-design/loading/empty";

export default function ServicesWidget({ filters, setFilters, input }: any) {
  const { data, isLoading } = useGetReportServices(input);

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
    <Spinner
      size="large"
      spinning={isLoading}
      indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
    >
      <div className="w-full">
        {!data || data.data.length === 0 ? (
          <div className="flex justify-center items-center mt-12">
            <Empty />
          </div>
        ) : (
          <Column {...config} />
        )}
      </div>
    </Spinner>
  );
}

//  indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
