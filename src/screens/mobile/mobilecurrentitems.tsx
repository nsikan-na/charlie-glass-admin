import { Divider } from "antd";
import { decimalThousandsCommaSeparated } from "../../util/helpers";

export default function MobileCurrentItems({
  description,
  quantity,
  price,
}: any) {
  return (
    <div>
      <div className="flex gap-2">
        <div className="font-bold">Description:</div>
        <div>{description}</div>
      </div>
      <div>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <div className="font-bold">Price:</div>
            <div>${price}</div>
          </div>
          <div className="flex gap-1">
            <div className="font-bold">Quantity:</div>
            <div>x{quantity}</div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
