import { useEffect, useState } from "react";
import Input from "../../components/ant-design/form/Input";
export default function InvoiceDetailsInput({ setInvoice }: any) {
  const [input, setInput] = useState({});

  const handleInputChange = (key: string) => (e: any) => {
    setInput((i) => ({ ...i, [key]: e.target.value }));
  };

  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, ...input }));
  }, [input, setInvoice]);
  return (
    <>
      <div className="grid grid-rows-2 gap-0">
        <div>
          <div>Name</div>
          <Input
            onChange={handleInputChange("receiver_name")}
            className="w-72"
          />
        </div>
        <div>
          <div>Street</div>
          <Input onChange={handleInputChange("street")} className="w-6/12" />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <div>City</div>
          <div className="">
            <Input onChange={handleInputChange("city")} className="w-52" />
          </div>
        </div>
        <div>
          <div>State</div>
          <Input onChange={handleInputChange("state")} className="w-52" />
        </div>
        <div>
          <div>Zip</div>
          <Input onChange={handleInputChange("zip")} className="w-52" />
        </div>
      </div>
    </>
  );
}
