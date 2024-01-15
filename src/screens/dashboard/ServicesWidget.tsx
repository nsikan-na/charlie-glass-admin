import { Column } from "@ant-design/plots";
import RangePicker from "../components/ant-design/form/RangePicker";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";
import { useState } from "react";
import useGetServices from "../../hooks/reports/useGetServices";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function ServicesWidget() {
  const [input, setInput] = useState(null);
  const [filters, setFilters] = useState(null);
  const { data } = useGetServices(input);
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
    <div>
      <div className="flex space-x-2 mt-8">
        <div className="ml-8 ">
          <RangePicker onChange={onRangeFilterChange} />
        </div>
        <SearchButton className="" onClick={() => setInput(filters)} />
      </div>
      {!data ? (
        <div className="flex justify-center items-center mt-12">
          <Spin />
        </div>
      ) : (
        <Column {...config} />
      )}
    </div>
  );
}

//  indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
