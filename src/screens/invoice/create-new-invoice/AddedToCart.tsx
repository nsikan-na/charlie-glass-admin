import { decimalThousandsCommaSeparated } from '../../../util/helpers';

export default function AddedToCart({
  addedToCart,
  description,
  quantity,
  price
}: any) {
  return (
    <div className="my-4 text-base grid grid-cols-7  ">
      <div className="text-xl col-span-5">{description}</div>
      <div className="col-span-1 text-center">x{quantity}</div>
      <div className="col-span-1 text-center">
        ${decimalThousandsCommaSeparated(price)}
      </div>
    </div>
  );
}
