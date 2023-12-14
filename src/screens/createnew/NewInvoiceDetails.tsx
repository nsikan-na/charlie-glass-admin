import { useEffect, useState } from "react";

export default function InvoiceDetailsInput({ setInvoice }: any) {
  const [input, setInput] = useState({});

  useEffect(() => {
    console.log(input);
  }, [input]);
  const handleInputChange = (key: string) => (e: any) =>
    setInput((i) => ({ ...i, [key]: e.target.value }));

  useEffect(
    () => setInvoice((invoice: any) => ({ ...invoice, ...input })),
    [input, setInvoice]
  );

  return (
    <>
      <div className="grid grid-rows-2 gap-4">
        <input
          className="w-48 h-12"
          placeholder="Name"
          onChange={handleInputChange("receiver_name")}
        />
        <input
          className="w-80 h-12"
          placeholder="Street"
          onChange={handleInputChange("street")}
        />
      </div>
      <div className="flex justify-between">
        <input
          className="w-32 h-12"
          placeholder="City"
          onChange={handleInputChange("city")}
        />
        <input
          className="w-32 h-12"
          placeholder="State"
          onChange={handleInputChange("state")}
        />
        <input
          className="w-32 h-12"
          placeholder="Zip"
          onChange={handleInputChange("zip")}
        />
      </div>
    </>
  );
}
