import { Button } from "antd";
import InvoiceCard from "./InvoiceCard";
import InvoiceModal from "../modals/InvoiceModal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ERoute } from "../../routing/helpers";
import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";
import Input from "../components/ant-design/Input";
import { SearchButton } from "../components/ant-design/SearchButton";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const Invoice = (): JSX.Element => {
  const [invoices, setInvoices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetAllInvoices();
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [filteredByName, setFilteredByName] = useState([]);
  const [filteredById, setFilteredById] = useState([]);
  const [filteredByDate, setFilteredByDate] = useState([]);
  const [pdf, setPdf] = useState(0);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [range, setRange] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { data: pdfData }: any = useGetInvoiceById(currentInvoice as any);
  useEffect(() => {
    setPdf(pdfData?.data);
  }, [currentInvoice, pdfData]);

  function filterByName(e: any) {
    setFilteredById([]);
    const filteredInvoices = data?.data?.filter((invoice: any) => {
      return invoice.receiver_name.toLowerCase() === name.toLowerCase();
    });
    setFilteredByName(filteredInvoices as any);
  }

  function filterById(e: any) {
    setFilteredByName([]);
    const filteredInvoices = data?.data?.filter((invoice: any) => {
      return invoice.invoice_id.toString() === (id as any);
    });

    setFilteredById(filteredInvoices as any);
  }

  function onRangeChange(dates: any, dateStrings: [string, string]) {
    setStartDate(new Date(dateStrings[0]));
    setEndDate(new Date(dateStrings[1]));
  }
  function filterByDate(e: any) {
    setFilteredByName([]);
    setFilteredById([]);
    const filteredInvoices = data?.data?.filter((invoice: any) => {
      const invoiceDate = new Date(invoice.invoice_creation_date);
      return invoiceDate >= startDate && invoiceDate <= endDate;
    });
    setFilteredByDate(filteredInvoices as any);
  }
  // function clearRange() {
  //   setRange(null);
  // }

  return (
    <div>
      <InvoiceModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        pdf={pdf}
      />
      <div className="flex justify-between m-4">
        <div className="w-full">
          <Input
            onFocus={(e) => {
              setName("");
              // clearRange();
            }}
            label="Invoice #"
            className="inline "
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <SearchButton className="inline" onClick={filterById} />

          <span className="mx-8">
            <Input
              onFocus={(e) => {
                setId("");
              }}
              label="Name"
              className=" inline"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <SearchButton className="inline" onClick={filterByName} />
          </span>
          <RangePicker value={range} onChange={onRangeChange} />
          <SearchButton className="inline" onClick={filterByDate} />
        </div>
        <Link to={ERoute.CREATE_INVOICE}>
          <Button type="primary">New</Button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-between items-center overflow-y-scroll h-3/4 p-6 my-4">
        {filteredByName && (
          <FilteredByName
            setCurrentInvoice={setCurrentInvoice}
            showModal={showModal}
            filteredByName={filteredByName}
          />
        )}
        {filteredById && (
          <FilteredById
            setCurrentInvoice={setCurrentInvoice}
            showModal={showModal}
            filteredById={filteredById}
          />
        )}
        {filteredByDate && (
          <FilteredByDate
            setCurrentInvoice={setCurrentInvoice}
            showModal={showModal}
            filteredByDate={filteredByDate}
          />
        )}
        {filteredById.length === 0 &&
          filteredByName.length === 0 &&
          filteredByDate.length === 0 &&
          data?.data?.map((invoice: any) => (
            <InvoiceCard
              setCurrentInvoice={setCurrentInvoice}
              showModal={showModal}
              invoice={invoice}
            />
          ))}

        {/* {data?.data?.map((invoice: any) => (
         <InvoiceCard
           setCurrentInvoice={setCurrentInvoice}
           showModal={showModal}
           invoice={invoice}
         />
       ))}
        {/* <FilteredByDate
          setCurrentInvoice={setCurrentInvoice}
          showModal={showModal}
          filteredByDate={filteredByDate}
        /> */}
      </div>
    </div>
  );
};

function FilteredByName({
  name,
  filteredByName,
  setCurrentInvoice,
  showModal,
  invoice,
}: any) {
  return (
    <>
      {filteredByName?.map((invoice: any) => (
        <InvoiceCard
          setCurrentInvoice={setCurrentInvoice}
          showModal={showModal}
          invoice={invoice}
        />
      ))}
    </>
  );
}

function FilteredById({
  id,
  filteredById,
  setCurrentInvoice,
  showModal,
  invoice,
}: any) {
  return (
    <>
      {filteredById?.map((invoice: any) => (
        <InvoiceCard
          setCurrentInvoice={setCurrentInvoice}
          showModal={showModal}
          invoice={invoice}
        />
      ))}
    </>
  );
}

function FilteredByDate({
  date,
  filteredByDate,
  setCurrentInvoice,
  showModal,
  invoice,
}: any) {
  return (
    <>
      {filteredByDate?.map((invoice: any) => (
        <InvoiceCard
          setCurrentInvoice={setCurrentInvoice}
          showModal={showModal}
          invoice={invoice}
        />
      ))}
    </>
  );
}

export default Invoice;
