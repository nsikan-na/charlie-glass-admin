import useGetServices from "../../hooks/reports/useGetServices";
import { useState } from "react";
import ServicesWidget from "./ServicesWidget";
import ProfitsWidget from "./ProfitsWidget";
import useGetProfits from "../../hooks/reports/useGetProfits";

export default function Dashboard() {
  const [input, setInput] = useState(null);
  const [filters, setFilters] = useState(null);

  const [profitInput, setProfitInput] = useState(null);
  const [profitFilters, setProfitFilters] = useState(null);

  const { data } = useGetServices(input);
  const { data: profitData } = useGetProfits(profitInput);

  const onChartRangeFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({ ...prev, fromDate: e[0], toDate: e[1] }));
  };
  const onProfitsFilterChange = (_: unknown, e: any) => {
    setProfitFilters((prev: any) => ({
      ...prev,
      fromDate: e[0],
      toDate: e[1],
    }));
  };

  return (
    <div>
      <ServicesWidget
        data={data}
        onRangeFilterChange={onChartRangeFilterChange}
        setInput={setInput}
        filters={filters}
      />
      <ProfitsWidget
        data={profitData}
        onRangeFilterChange={onProfitsFilterChange}
        setInput={setProfitInput}
        filters={profitFilters}
      />
    </div>
  );
}
