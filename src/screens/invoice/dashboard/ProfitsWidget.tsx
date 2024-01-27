import { Tag } from "antd";
import {
  decimalThousandsCommaSeparated,
  formatTimestampDate,
} from "../../../util/helpers";
import useGetProfits from "../../../hooks/reports/useGetReportProfits";

import Spinner from "../../components/ant-design/Spinner";
import { uniqueId } from "lodash";

export default function ProfitsWidget({ input }: any) {
  const { data, isLoading } = useGetProfits(input);

  return (
    <div className="mt-8  ">
      <Spinner spinning={isLoading}>
        <div className=" flex justify-center mt-14">
          <div
            className=" w-10/12 grid grid-cols-1 justify-center "
            style={{ height: "45vh" }}
          >
            <div style={{ overflowY: "scroll" }}>
              {data?.data?.content?.rows.map((row: any) => {
                return <Profit row={row} key={uniqueId()} />;
              })}
            </div>
            <div className="mt-5">
              {data?.data?.content?.rows && <Totals data={data} />}
            </div>
          </div>
        </div>
      </Spinner>
    </div>
  );
}

function Profit({ row }: any) {
  return (
    <div className=" w-10/12 grid grid-cols-4 m-auto .auto-cols-min mt-4">
      <div>
        <div className="text-lg text-center items-center mx-6 mt-4">
          {formatTimestampDate(row.signature_date)}
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
    <div className=" w-10/12 grid grid-cols-4 m-auto .auto-cols-min">
      <div></div>
      <div>
        <div>
          Total Revenue
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="blue">
              {decimalThousandsCommaSeparated(
                data?.data?.content?.totalRevenue,
              )}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Total Expense
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="red">
              {decimalThousandsCommaSeparated(
                data?.data?.content?.totalExpense,
              )}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Total Profit
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="green">
              {decimalThousandsCommaSeparated(data?.data?.content?.totalProfit)}
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
