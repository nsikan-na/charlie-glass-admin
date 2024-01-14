import { useEffect } from "react";
import RangePicker from "../components/ant-design/form/RangePicker";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";

import { Tag } from "antd";
import { formatDate } from "../../util/helpers";

export default function ProfitsWidget({
  data,
  onRangeFilterChange,
  setInput,
  filters,
}: any) {
  useEffect(() => {
    console.log(data?.data?.rows);
  }, [data]);
  return (
    <div className="mt-40">
      <div className="flex space-x-2 ">
        <div className="ml-8 ">
          <RangePicker onChange={onRangeFilterChange} />
        </div>
        <SearchButton className="" onClick={() => setInput(filters)} />
      </div>
      <div className=" flex justify-center mt-14">
        <div className=" w-10/12 grid grid-cols-1 justify-center">
          {data?.data?.rows.map((row: any) => {
            return <Profit row={row} />;
          })}
        </div>
      </div>
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
