import { Divider, Tag } from "antd";
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
    <div className="mt-1 md:w-full  ">
      <Spinner spinning={isLoading}>
        <div className=" flex justify-center  ">
          <div
            className=" w-10/12 grid grid-cols-1 justify-center "
            style={{ height: "70vh" }}
          >
            <div style={{ overflowY: "scroll" }}>
              {data?.data?.content?.rows.map((row: any) => {
                return (
                  <div key={uniqueId()}>
                    <Profit row={row} />
                    <Divider />
                  </div>
                );
              })}
            </div>

            <Divider>Totals</Divider>
            <div className="flex justify-center mb-3">
              <div className="mt-2 ">
                {data?.data?.content?.rows && <Totals data={data} />}
              </div>
            </div>
          </div>
        </div>
      </Spinner>
    </div>
  );
}

function Profit({ row }: any) {
  return (
    <>
      <div>
        <div className=" text-center items-center  ">
          {formatTimestampDate(row.signature_date)}
        </div>
      </div>
      <div className=" gap-8 w-10/12 grid grid-cols-3 m-auto .auto-cols-min mt-1">
        <div>
          <div>
            Revenue
            <div>
              <Tag color="blue">{row.revenue}</Tag>
            </div>
          </div>
        </div>
        <div>
          <div>
            Expense
            <div>
              <Tag color="red">{row.expense}</Tag>
            </div>
          </div>
        </div>
        <div>
          <div>
            Profit
            <div>
              <Tag className=" " color="green">
                {row.profit}
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Totals({ data }: any) {
  return (
    <div className=" gap-8 w-10/12 grid grid-cols-3 m-auto .auto-cols-min">
      <div>
        <div>
          Revenue
          <div>
            <Tag color="blue">
              {decimalThousandsCommaSeparated(
                data?.data?.content?.totalRevenue,
              )}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Expense
          <div>
            <Tag color="red">
              {decimalThousandsCommaSeparated(
                data?.data?.content?.totalExpense,
              )}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Profit
          <div>
            <Tag color="green">
              {decimalThousandsCommaSeparated(data?.data?.content?.totalProfit)}
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
