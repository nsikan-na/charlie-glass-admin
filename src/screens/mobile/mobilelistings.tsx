import { useEffect, useState } from "react";
import useGetAllInvoices from "../../hooks/invoices/useGetAllInvoices";
import { NewMobileCard } from "./mobilecards";
import {
  decimalThousandsCommaSeparated,
  formatDayjsDate,
} from "../../util/helpers";
import dayjs from "dayjs";
import SignModal from "../modals/invoice/SignModal";
import useGetInvoiceById from "../../hooks/invoices/useGetInvoiceById";
import InvoiceModal from "../modals/invoice/InvoiceModal";
import Drawer from "antd/es/drawer";
import { FilterOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import Spinner from "../components/ant-design/Spinner";
import Button from "../components/ant-design/buttons/PrimaryButton";
import MobileFiltersModal from "./ModalsMobile/filtersmodal";
import SecondaryButton from "../components/ant-design/buttons/SecondaryButton";
import { uniqueId } from "lodash";
import Input from "../components/ant-design/form/Input";
import { Checkbox, Divider } from "antd";
import useGetServices from "../../hooks/invoices/useGetServices";
import AddMobileItemsModal from "./ModalsMobile/additemsmodal";
import MobileCurrentItems from "./mobilecurrentitems";
import useAddNewInvoice from "../../hooks/invoices/useAddNewInvoice";
import PrimaryButton from "../components/ant-design/buttons/PrimaryButton";

const initialInvoiceState = {
  receiver_name: null,
  street: null,
  city: null,
  state: null,
  zip: null,
  items: [],
  services: [],
};

export default function MobileListings({ open, onClose, showDrawer }: any) {
  const [isSignModalOpen, setSignModalOpen] = useState(false);
  const showSignModal = () => {
    setSignModalOpen(true);
  };

  const initialState = {
    fromDate: formatDayjsDate(dayjs().subtract(3, "month")),
    toDate: formatDayjsDate(dayjs()),
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const navigate = useNavigate();
  const [input, setInput] = useState<any>(initialState);
  const [filters, setFilters] = useState<any>(initialState);

  const [createInvoiceInput, setCreateInvoiceInput] =
    useState<any>(initialInvoiceState);

  const [invoice, setInvoice]: any = useState(initialInvoiceState);
  const [cartItems, setCart]: any = useState([]);
  const [checkedServices, setCheckedServices] = useState([]);

  const [isAddItemsModalOpen, setIsAddItemsModalOpen] = useState(false);

  //FiltersModal
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  function showFiltersModal() {
    setIsFiltersModalOpen(true);
  }
  function closeFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  const { data, isLoading }: any = useGetAllInvoices(input);
  const { data: servicesData, isLoading: servicesIsLoading }: any =
    useGetServices();

  const { data: pdfData, isLoading: pdfLoading }: any = useGetInvoiceById(
    currentInvoice as any,
  );

  const onFilterChange = (key: string) => (e: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSelectFilter = (key: string) => (value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [key]: value === "undefined" ? undefined : value,
    }));
  };
  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, items: cartItems }));
  }, [cartItems]);

  const showModal = (listing: any) => {
    setCurrentInvoice(listing);

    setIsModalOpen(true);
  };

  const closeSignModal = () => {
    setSignModalOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSignModalOpen(false);
  };

  function handleClick(invoice: any) {
    setCurrentInvoice(invoice.invoice_id);
  }

  function handleOnClose() {
    setInput(filters);
    closeFiltersModal();
  }

  //Create New Listing Drawer ////////////////////////////////////////////////////
  const handleInputChange = (key: string) => (e: any) => {
    setCreateInvoiceInput((i: any) => ({ ...i, [key]: e.target.value }));
  };
  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, ...createInvoiceInput }));
  }, [createInvoiceInput, setInvoice]);

  const onChange = (checkedValue: any) => {
    setCheckedServices(checkedValue);
  };
  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, services: checkedServices }));
  }, [checkedServices, setInvoice]);

  const showAddItemsModal = () => {
    setIsAddItemsModalOpen(true);
  };
  function closeAddItemsModal() {
    setIsAddItemsModalOpen(false);
  }

  const add = useAddNewInvoice();

  function handleSubmit() {
    add.mutate(invoice);
  }
  useEffect(() => {
    setInvoice(initialInvoiceState);
    setCart([]);
  }, [open]);

  const fromDateFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({
      ...prev,
      fromDate: e,
    }));
  };
  const toDateFilterChange = (_: unknown, e: any) => {
    setFilters((prev: any) => ({
      ...prev,
      toDate: e,
    }));
  };

  return (
    <div>
      <Drawer title={"Create New Quote"} onClose={onClose} open={open}>
        <>
          <div className="grid grid-rows-2 gap-0">
            <div className="mb-2">
              <div>Name</div>
              <Input
                onChange={handleInputChange("receiver_name")}
                className=""
              />
            </div>
            <div className="mb-2">
              <div>Street</div>
              <Input onChange={handleInputChange("street")} className="" />
            </div>
          </div>
          <div className="mb-2">
            <div>City</div>
            <div className="">
              <Input onChange={handleInputChange("city")} className="" />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div>State</div>
              <Input onChange={handleInputChange("state")} className="w-1/2" />
            </div>
            <div>
              <div>Zip</div>
              <Input onChange={handleInputChange("zip")} className="w-1/2" />
            </div>
          </div>
          <Divider>Services</Divider>
          <div className=" mt-4">
            <Spinner spinning={isLoading}>
              {/* @ts-ignore */}
              <Checkbox.Group
                onChange={onChange}
                value={checkedServices}
                style={{
                  justifyItems: "start",
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "100%",
                }}
              >
                {servicesData?.data?.content?.map((service: any) => (
                  <Checkbox key={uniqueId()} value={service.id}>
                    <div className="text-lg">{service.label}</div>
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Spinner>
            <Divider />
            <div className="flex justify-start mt-5">
              <div className="font-bold text-xl">Current Items</div>
            </div>
            {cartItems?.map((item: any) => (
              <MobileCurrentItems
                key={uniqueId()}
                description={item.description}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
            <div className="flex justify-between">
              <div className="flex gap-1">
                <div className="font-bold text-xl">Total:</div>
                <div className="text-xl">
                  $
                  {decimalThousandsCommaSeparated(
                    cartItems
                      ?.map((item: any) => item.price)
                      ?.reduce((acc: number, cur: number) => {
                        return acc + cur;
                      }, 0),
                  )}
                </div>
              </div>
              <SecondaryButton onClick={showAddItemsModal}>
                Add Items
              </SecondaryButton>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
          </div>
        </>
        <AddMobileItemsModal
          isModalOpen={isAddItemsModalOpen}
          closeModal={closeAddItemsModal}
          setCart={setCart}
        />
      </Drawer>
      <div className="flex  text-lg justify-end">
        {/* <div className="mt-4  ml-4">
          <Button onClick={setScreen}>View Dashboard</Button>
        </div> */}
        <div className="mt-4  mr-4">
          <Button onClick={showDrawer}>Create New Quote</Button>
        </div>
      </div>
      <div className="flex  ml-4 text-lg gap-1">
        <div className="mb-2">
          <SecondaryButton onClick={showFiltersModal}>
            <FilterOutlined />
            Apply Filters
          </SecondaryButton>
        </div>
      </div>
      <div className="flex justify-center  ">
        <Spinner spinning={isLoading}>
          <div className="grid grid-cols-1 gap-y-8 ">
            {data?.data?.content?.map((listing: any) => (
              // <MobileCards
              //   isLoading={isLoading}
              //   listing={listing}
              //   showSignModal={showSignModal}
              //   showModal={showModal}
              //   setCurrentInvoice={setCurrentInvoice}
              //   handleClick={handleClick}
              // />
              <NewMobileCard
                key={uniqueId()}
                listing={listing}
                isLoading={isLoading}
                showSignModal={showSignModal}
                showModal={showModal}
                setCurrentInvoice={setCurrentInvoice}
                handleClick={handleClick}
              />
            ))}
          </div>
        </Spinner>
        <SignModal
          currentInvoice={currentInvoice}
          isSignModalOpen={isSignModalOpen}
          closeSignModal={closeSignModal}
        />
        <InvoiceModal
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          pdf={pdfData?.data?.content}
          isLoading={pdfLoading}
        />
        <MobileFiltersModal
          isOpen={isFiltersModalOpen}
          closeModal={closeFiltersModal}
          // onRangeFilterChange={onRangeFilterChange}
          handleOnClose={handleOnClose}
          filters={filters}
          onFilterChange={onFilterChange}
          handleSelectFilter={handleSelectFilter}
          toDateFilterChange={toDateFilterChange}
          fromDateFilterChange={fromDateFilterChange}
        />
      </div>
    </div>
  );
}
