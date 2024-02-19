import { Avatar, Divider, Drawer, Dropdown, MenuProps, Space } from "antd";

import {
  BarChartOutlined,
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { Context, userInitialState } from "../../context";
import { EColors } from "../../util/enums/colors";
import setLocalStorage from "../../hooks/localstorage/setLocalStorage";
import ELocalStorage from "../../util/enums/localStorage";
import { ERoute } from "../../util/enums/routes";
import { useNavigate } from "react-router-dom";
import Button from "../components/ant-design/buttons/PrimaryButton";

import { formatDayjsDate } from "../../util/helpers";
import dayjs from "dayjs";

import RangePicker from "../components/ant-design/form/RangePicker";
import { SearchButton } from "../components/ant-design/buttons/SearchButton";
import MobileProfitsWidget from "./WidgetsMobile/mobileprofitswidget";
import MobileServicesWidget from "./WidgetsMobile/mobileserviceswidget";

const initialState = {
  fromDate: formatDayjsDate(dayjs().subtract(1, "month")),
  toDate: formatDayjsDate(dayjs()),
};

export default function MobileDashboard({ open, onClose, setScreen }: any) {
  const [filters, setFilters]: any = useState(initialState);
  const [input, setInput] = useState(initialState);
  const navigate = useNavigate();
  const { user }: any = useContext(Context);
  const onRangeFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({
      ...prev,
      fromDate: e[0],
      toDate: e[1],
    }));
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          className="cursor-pointer  "
          onClick={() => {
            setLocalStorage(ELocalStorage.USER, userInitialState);
            navigate(ERoute.LOGIN);
          }}
        >
          <LogoutOutlined className="mr-2" />
          Log Out
        </span>
      ),
    },
  ];
  return (
    <div>
      <Drawer
        title={
          <Dropdown menu={{ items }} className="mb-2 mt-4">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span className="">
                  <Avatar
                    size="small"
                    className="mr-1 self-center"
                    style={{ backgroundColor: EColors.primary }}
                    icon={<UserOutlined style={{ color: EColors.white }} />}
                  />
                  {`${user.userName}`}
                </span>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        }
        onClose={onClose}
        open={open}
      >
        <div className="flex  text-lg gap-1">
          <div>
            <Button onClick={setScreen}>View Listings</Button>
          </div>
        </div>
        <Divider>Filter By Date</Divider>
        <div className="mt-12">
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
      </Drawer>
      <div className="mt-4  ml-4">
        <Button onClick={setScreen}>View Listings</Button>
      </div>
      <Divider>
        <BarChartOutlined /> Profits
      </Divider>
      <MobileProfitsWidget input={input} />
      <Divider>
        <BarChartOutlined /> Services
      </Divider>
      <MobileServicesWidget input={input} />
    </div>
  );
}
