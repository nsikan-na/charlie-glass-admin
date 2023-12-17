export default function AddedToCart({
  addedToCart,
  description,
  quantity,
  price,
}: any) {
  return (
    <div className="my-4">
      <div>Description: {description}</div>
      <div style={{ display: "flex" }}>
        <div className="mr-20">Quantity: {quantity}</div>
        <div>Price: {price}</div>
      </div>
    </div>
  );
}
