import ServicesWidget from "./ServicesWidget";
import ProfitsWidget from "./ProfitsWidget";
import { useState } from "react";
import RangePicker from "../../components/ant-design/form/RangePicker";
import { SearchButton } from "../../components/ant-design/buttons/SearchButton";

export default function Dashboard() {
  const [filters, setFilters]: any = useState(null);
  const [input, setInput] = useState(null);
  const onRangeFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({
      ...prev,
      fromDate: e[0],
      toDate: e[1],
    }));
  };
  return (
    <div>
      <RangePicker onChange={onRangeFilterChange} />
      <span className="ml-2">
        <SearchButton onClick={() => setInput(filters)} />
      </span>
      <div className="flex justify-center">
        <div className="w-full">
          <ProfitsWidget input={input} />
        </div>
        <div className="w-full">
          <ServicesWidget input={input} />
        </div>
      </div>
    </div>
  );
}
