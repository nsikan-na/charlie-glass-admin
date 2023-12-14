import styled from "styled-components";
import Input from "antd/es/input/Input";
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
      <div
        style={{
          display: "grid",
          gridTemplateRows: "4rem 4rem",
          //   backgroundColor: "red",
          //   justifyContent: "center",
        }}
      >
        <NameInput
          placeholder="Name"
          onChange={handleInputChange("receiver_name")}
        />
        <StreetInput
          placeholder="Street"
          onChange={handleInputChange("street")}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LocationInput
          placeholder="City"
          onChange={handleInputChange("city")}
        />
        <LocationInput
          placeholder="State"
          onChange={handleInputChange("state")}
        />
        <LocationInput placeholder="Zip" onChange={handleInputChange("zip")} />
      </div>
    </>
  );
}

const NameInput = styled(Input)`
  width: 12rem;
  height: 3rem;
`;
const StreetInput = styled(Input)`
  width: 20rem;
  height: 3rem;
`;

const LocationInput = styled(Input)`
  width: 10rem;
  height: 3rem;
`;
