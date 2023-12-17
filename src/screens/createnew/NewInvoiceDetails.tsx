import { useEffect, useState } from "react";
import Input from "../components/ant-design/Input";
export default function InvoiceDetailsInput({ setInvoice }: any) {
  const [input, setInput] = useState({});

  useEffect(() => {
    console.log(input);
  }, [input]);

  const handleInputChange = (key: string) => (e: any) => {
    setInput((i) => ({ ...i, [key]: e.target.value }));
  };

  useEffect(
    () => setInvoice((invoice: any) => ({ ...invoice, ...input })),
    [input, setInvoice]
  );

  return (
    <>
      <div className="grid grid-rows-2 gap-0">
        <Input label="Name" onChange={handleInputChange("receiver_name")} />
        <Input label="Street" onChange={handleInputChange("street")} />
      </div>
      <div className="flex justify-between">
        <Input label="City" onChange={handleInputChange("city")} />
        <Input label="State" onChange={handleInputChange("state")} />
        <Input label="Zip" onChange={handleInputChange("zip")} />
      </div>
    </>
  );
}
