import { useEffect, useState } from "react";
import RangePicker from "../components/ant-design/form/RangePicker";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";
import { Spin } from "antd";
import { Tag } from "antd";
import { formatDate } from "../../util/helpers";
import useGetProfits from "../../hooks/reports/useGetProfits";

export default function ProfitsWidget() {
  const [input, setInput] = useState(null);
  const [filters, setFilters] = useState(null);
  const { data } = useGetProfits(input);

  const onFiltersChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({
      ...prev,
      fromDate: e[0],
      toDate: e[1],
    }));
  };

  return (
    <div className="mt-40">
      <div className="flex space-x-2 ">
        <div className="ml-8 ">
          <RangePicker onChange={onFiltersChange} />
        </div>
        <SearchButton className="" onClick={() => setInput(filters)} />
      </div>
      {!data ? (
        <div className="flex justify-center items-center mt-12">
          <Spin />
        </div>
      ) : (
        <div className=" flex justify-center mt-14">
          <div className=" w-10/12 grid grid-cols-1 justify-center">
            {data?.data?.rows.map((row: any) => {
              return <Profit row={row} />;
            })}
            <div className="mt-5">
              <Totals data={data} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Profit({ row }: any) {
  return (
    <div className=" w-10/12 grid grid-cols-4 m-auto .auto-cols-min mt-4">
      <div>
        <div>
          Signature Date
          <div>{formatDate(row.signature_date)}</div>
        </div>
      </div>
      <div>
        <div>
          Revenue
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="blue">
              {row.revenue}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Expense
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="red">
              {row.expense}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Profit
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="green">
              {row.profit}
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

function Totals({ data }: any) {
  return (
    <div className=" w-10/12 grid grid-cols-4 m-auto .auto-cols-min mt-4">
      <div></div>
      <div>
        <div>
          Total Revenue
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="blue">
              {data?.data?.totalRevenue}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Total Expense
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="red">
              {data?.data?.totalExpense}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Total Profit
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="green">
              {data?.data?.totalProfit}
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
