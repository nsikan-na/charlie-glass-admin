import ServicesWidget from "./ServicesWidget";
import ProfitsWidget from "./ProfitsWidget";
import { useEffect, useState } from "react";
import RangePicker from "../../components/ant-design/form/RangePicker";
import { SearchButton } from "../../components/ant-design/buttons/SearchButton";
import dayjs from "dayjs";
import useQueryParam from "../../../hooks/queryParam/useQueryParam";
import { invoiceTabKey } from "../Main";
import { formatDayjsDate } from "../../../util/helpers";

const initialState = {
  fromDate: formatDayjsDate(dayjs().subtract(1, "month")),
  toDate: formatDayjsDate(dayjs().subtract(1, "day")),
};

export default function Dashboard() {
  const [filters, setFilters]: any = useState(initialState);
  const [input, setInput] = useState(initialState);
  const { getQuery } = useQueryParam();

  useEffect(() => {
    setFilters(initialState);
    setInput(initialState);
  }, [getQuery(invoiceTabKey)]);

  const onRangeFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({
      ...prev,
      fromDate: e[0],
      toDate: e[1],
    }));
  };
  return (
    <div>
      <RangePicker
        onChange={onRangeFilterChange}
        value={
          filters?.fromDate && filters?.toDate
            ? [dayjs(filters?.fromDate), dayjs(filters?.toDate)]
            : undefined
        }
      />
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
