import { DatePicker } from "antd";
import { RangePickerProps } from "antd/lib/date-picker";
import { DATE_FORMAT } from "../../../../util/helpers";

// interface AntRangePickerProps extends RangePickerProps {}

const { RangePicker: AntRangePicker } = DatePicker;

const RangePicker = ({ ...props }: any) => {
  return (
    <AntRangePicker {...props} className="" format={DATE_FORMAT} allowClear />
  );
};
export default RangePicker;
