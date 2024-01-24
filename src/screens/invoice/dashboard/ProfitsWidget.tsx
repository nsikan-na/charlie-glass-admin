import { Tag } from "antd";
import {
  decimalThousandsCommaSeparated,
  formatDate,
} from "../../../util/helpers";
import useGetProfits from "../../../hooks/reports/useGetReportProfits";

import Spinner from "../../components/ant-design/loading/spinner";
import { uniqueId } from "lodash";

export default function ProfitsWidget({ input }: any) {
  const { data, isLoading } = useGetProfits(input);

  return (
    <div className="mt-8  ">
      <Spinner spinning={isLoading}>
        <div className=" flex justify-center mt-14">
          <div
            className=" w-10/12 grid grid-cols-1 justify-center "
            style={{ height: "40vh" }}
          >
            {data?.data?.rows.map((row: any) => {
              return <Profit row={row} key={uniqueId()} />;
            })}
            <div className="mt-5">
              {data?.data?.rows && <Totals data={data} />}
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
              {decimalThousandsCommaSeparated(data?.data?.totalRevenue)}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Total Expense
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="red">
              {decimalThousandsCommaSeparated(data?.data?.totalExpense)}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Total Profit
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="green">
              {decimalThousandsCommaSeparated(data?.data?.totalProfit)}
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
