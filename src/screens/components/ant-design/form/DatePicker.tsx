import { DatePicker as AntDatePicker } from 'antd';
import { DATE_FORMAT } from '../../../../util/helpers';

// interface AntRangePickerProps extends RangePickerProps {}

const DatePicker = ({ ...props }: any) => {
  return (
    <AntDatePicker {...props} className="" format={DATE_FORMAT} allowClear />
  );
};
export default DatePicker;
