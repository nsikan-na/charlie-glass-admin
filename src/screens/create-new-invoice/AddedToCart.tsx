export default function AddedToCart({
  addedToCart,
  description,
  quantity,
  price,
}: any) {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>Description: {description}</div>
      <div>Quantity: {quantity}</div>
      <div>Price: {price}</div>
    </div>
  );
}
