import ServicesWidget from "./ServicesWidget";
import ProfitsWidget from "./ProfitsWidget";
import { useEffect, useState } from "react";
import { SearchButton } from "../../components/ant-design/buttons/SearchButton";
import useQueryParam from "../../../hooks/queryParam/useQueryParam";
import { invoiceTabKey } from "../Main";
import DatePicker from "../../components/ant-design/form/DatePicker";
import { Divider } from "antd";

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
      <div className=" flex  justify-center w-full mt-4 ">
        <div className="md:flex md:justify-between md:gap-4 grid grid-cols-1 md:w-full  ">
          <div className="md:w-1/2  ">
            <div>
              <Divider>Profits</Divider>
            </div>
            <ProfitsWidget input={input} />
          </div>
          <div className="md:w-1/2 ">
            <div className="w-full">
              <Divider>Services</Divider>
              <ServicesWidget input={input} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
