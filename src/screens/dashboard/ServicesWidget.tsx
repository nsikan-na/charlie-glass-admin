import { Column } from "@ant-design/plots";
import RangePicker from "../components/ant-design/form/RangePicker";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";

export default function ServicesWidget({
  data,
  onRangeFilterChange,
  setInput,
  filters,
}: any) {
  if (!data) {
    return <div>Loading...</div>;
  }
  const config = {
    data: data?.data,
    xField: "service_label",
    yField: "service_count",
    label: {
      // position: "middle",

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
      <Column {...config} />
    </div>
  );
}
