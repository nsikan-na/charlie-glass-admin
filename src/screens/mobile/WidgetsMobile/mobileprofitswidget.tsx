import { Divider, Tag } from "antd";
import {
  decimalThousandsCommaSeparated,
  formatTimestampDate,
} from "../../../util/helpers";

import { uniqueId } from "lodash";
import Spinner from "../../components/ant-design/Spinner";
import useGetReportProfits from "../../../hooks/reports/useGetReportProfits";

export default function MobileProfitsWidget({ input }: any) {
  const { data, isLoading } = useGetReportProfits(input);

  return (
    <div className="flex justify-center w-full mb-10">
      <Spinner spinning={isLoading}>
        <div className=" flex justify-center mt-6 w-full">
          <div className=" w-full grid grid-cols-1 justify-center ">
            <div style={{ overflowY: "scroll" }}>
              {data?.data?.content?.rows.map((row: any) => {
                return <Profit row={row} key={uniqueId()} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Totals data={data} />
        </div>
      </Spinner>
    </div>
  );
}

function Profit({ row }: any) {
  return (
    <>
      <div>
        <div className=" font-bold text-center items-center mx-6 mt-4">
          {formatTimestampDate(row.signature_date)}
        </div>
      </div>
      <div className=" w-full grid grid-cols-3 m-auto .auto-cols-min mt-2 gap-4">
        <div>
          <div>
            Revenue
            <div>
              <Tag className="  w-10/12 h-7" color="blue">
                {row.revenue}
              </Tag>
            </div>
          </div>
        </div>
        <div>
          <div>
            Expense
            <div>
              <Tag className="  w-10/12 h-7" color="red">
                {row.expense}
              </Tag>
            </div>
          </div>
        </div>
        <div>
          <div>
            Profit
            <div>
              <Tag className=" w-10/12 h-7" color="green">
                {row.profit}
              </Tag>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}

function Totals({ data }: any) {
  return (
    <div className="gap-2 w-10/12 grid grid-cols-3 m-auto .auto-cols-min">
      <div>
        <div>
          Total Revenue
          <div>
            <Tag className=" text-lg w-full h-7" color="blue">
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
            <Tag className=" text-lg w-full h-7" color="red">
              {decimalThousandsCommaSeparated(
                data?.data?.content?.totalExpense,
              )}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Total
          <div>Profit</div>
          <div>
            <Tag className=" text-lg w-full h-7" color="green">
              {decimalThousandsCommaSeparated(data?.data?.content?.totalProfit)}
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
