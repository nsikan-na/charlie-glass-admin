import { useEffect, useState } from "react";
import RangePicker from "../components/ant-design/form/RangePicker";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";
import { Spin } from "antd";
import { Tag } from "antd";
import { formatDate } from "../../util/helpers";
import useGetProfits from "../../hooks/reports/useGetReportProfits";
import { LoadingOutlined } from "@ant-design/icons";

export default function ProfitsWidget({ filters, setFilters, input }: any) {
  const { data, isLoading } = useGetProfits(input);

  const [test, setTest] = useState(isLoading);
  useEffect(() => {
    setTest(isLoading);
  }, [isLoading]);

  return (
    <Spin
      size="large"
      spinning={test}
      indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
    >
      <div className="mt-8">
        {!data ? (
          <div className="flex justify-center items-center mt-12"></div>
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
    </Spin>
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
              {data?.data?.totalRevenue.toFixed(2)}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Total Expense
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="red">
              {data?.data?.totalExpense.toFixed(2)}
            </Tag>
          </div>
        </div>
      </div>
      <div>
        <div>
          Total Profit
          <div>
            <Tag className=" text-lg w-8/12 h-7" color="green">
              {data?.data?.totalProfit.toFixed(2)}
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
