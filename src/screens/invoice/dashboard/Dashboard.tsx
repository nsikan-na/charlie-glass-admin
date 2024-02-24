import ServicesWidget from "./ServicesWidget";
import ProfitsWidget from "./ProfitsWidget";
import { useEffect, useState } from "react";
import RangePicker from "../../components/ant-design/form/RangePicker";
import { SearchButton } from "../../components/ant-design/buttons/SearchButton";
import dayjs from "dayjs";
import useQueryParam from "../../../hooks/queryParam/useQueryParam";
import { invoiceTabKey } from "../Main";
import { formatDayjsDate } from "../../../util/helpers";
import { EColors } from "../../../util/enums/colors";
import { BarChartOutlined } from "@ant-design/icons";

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
  return (
    <>
      <div className=" mb-12 ">
        <RangePicker
          className="  "
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
      </div>
      <div className="  w-full h-screen rounded-lg">
        <div className="flex justify-center gap-14 ">
          <div
            style={{ borderColor: `${EColors.primary}` }}
            className="border-t-8  bg-white rounded-lg drop-shadow-2xl w-2/5 mt-12"
          >
            <div className="ml-8 mb-2 flex gap-2 text-lg">
              <BarChartOutlined style={{ color: EColors.primary }} />
              <div>Profits</div>
            </div>
            <div className="flex justify-center ">
              <div
                style={{ borderColor: `${EColors.primary}` }}
                className="border-b-2 w-11/12  "
              ></div>
            </div>
            <ProfitsWidget input={input} />
          </div>
          <div
            style={{ borderColor: `${EColors.primary}` }}
            className="= border-t-8  bg-white rounded-lg drop-shadow-2xl w-2/5 mt-12 "
          >
            <div className=" ml-8 mb-2 flex gap-2 text-lg">
              <BarChartOutlined style={{ color: EColors.primary }} />
              <div>Services</div>
            </div>

            <div className="flex justify-center ">
              <div
                style={{ borderColor: `${EColors.primary}` }}
                className="border-b-2 w-11/12  "
              ></div>
            </div>
            <ServicesWidget input={input} />
          </div>
        </div>
      </div>
    </>
  );
}
