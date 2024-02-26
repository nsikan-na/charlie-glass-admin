import ServicesWidget from "./ServicesWidget";
import ProfitsWidget from "./ProfitsWidget";
import { useEffect, useState } from "react";
import RangePicker from "../../components/ant-design/form/RangePicker";
import { SearchButton } from "../../components/ant-design/buttons/SearchButton";
import dayjs from "dayjs";
import useQueryParam from "../../../hooks/queryParam/useQueryParam";
import { invoiceTabKey } from "../Main";
import Input from "../../components/ant-design/form/Input";
import DatePicker from "../../components/ant-design/form/DatePicker";

const initialState = {
  fromDate: null,
  toDate: null,
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

  const onToFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({
      ...prev,
      toDate: e,
    }));
  };
  const onFromFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({
      ...prev,
      fromDate: e,
    }));
  };

  return (
    <div>
      <div className="flex gap-2">
        <div>
          From Date
          <DatePicker
            onChange={onToFilterChange}
            className="w-full"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          To Date
          <DatePicker
            onChange={onFromFilterChange}
            className="w-full"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <div style={{ visibility: "hidden" }}>-</div>
          <SearchButton onClick={() => setInput(filters)} />
        </div>
      </div>
      {/* <div className=" flex md:hidden">
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
      </div> */}
      <div className="flex justify-center ">
        <div className="w-full">
          <ProfitsWidget input={input} />
        </div>
        <div className="w-full">
          <ServicesWidget input={input} />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="md:hidden grid grid-cols-1">
          <div className="w-full">
            <ProfitsWidget input={input} />
          </div>
          <div className="w-full">
            <ServicesWidget input={input} />
          </div>
        </div>
      </div>
    </div>
  );
}
