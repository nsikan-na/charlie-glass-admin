export default function AddedToCart({
  addedToCart,
  description,
  quantity,
  price,
}: any) {
  return (
    <>
      <div>Description: {description}</div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>Quantity: {quantity}</div>
        <div>Price: {price}</div>
      </div>
    </>
  );
}
