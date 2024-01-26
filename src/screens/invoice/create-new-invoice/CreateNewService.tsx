import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { uniqueId } from "lodash";
import AddedToCart from "./AddedToCart";
import PrimaryButton from "../../components/ant-design/buttons/PrimaryButton";
import SecondaryButton from "../../components/ant-design/buttons/SecondaryButton";
import CreateNewInvoiceModal from "../../modals/invoice/InvoiceAddToCartModal";
import useAddNewInvoice from "../../../hooks/invoices/useAddNewInvoice";
import useGetServices from "../../../hooks/invoices/useGetServices";

import Spinner from "../../components/ant-design/Spinner";
import { decimalThousandsCommaSeparated } from "../../../util/helpers";

export default function InvoiceServicesInput({
  setInvoice,
  invoice,
  setCart,
  cartItems,
  setIsCreateScreenOpen,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkedServices, setCheckedServices] = useState([]);

  const { data, isLoading }: any = useGetServices();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onChange = (checkedValue: any) => {
    setCheckedServices(checkedValue);
  };
  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, services: checkedServices }));
  }, [checkedServices, setInvoice]);

  const add = useAddNewInvoice(() => {
    setIsCreateScreenOpen(false);
  });

  function handleSubmit() {
    add.mutate(invoice);
  }

  return (
    <>
      <CreateNewInvoiceModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        setCart={setCart}
        cartItems={cartItems}
        setInvoice={setInvoice}
      />
      <div className="my-8 text-center">
        <div style={{ justifySelf: "center" }} className="text-lg">
          Services
        </div>
        <div className="flex justify-center mt-4">
          <Spinner spinning={isLoading}>
            {/* @ts-ignore */}
            <Checkbox.Group
              onChange={onChange}
              value={checkedServices}
              style={{
                display: "grid",
                gridTemplateColumns: "12rem 12rem 12rem",
              }}
            >
              {data?.data?.map((service: any) => (
                <Checkbox key={uniqueId()} value={service.id}>
                  {service.label}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Spinner>
        </div>
      </div>
      <div className="my-8">
        {cartItems.length > 0 ? (
          <>
            <div
              style={{ justifySelf: "center" }}
              className=" text-center text-lg"
            >
              Current Items
            </div>
            {cartItems?.map((item: any) => (
              <AddedToCart
                key={uniqueId()}
                description={item.description}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
            <div className="text-base grid grid-cols-7  ">
              <div className="text-xl col-span-5"></div>
              <div className="col-span-1 text-center">Total</div>
              <div className="col-span-1 text-center">
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
          </>
        ) : null}
      </div>
      <div className="flex justify-center">
        <SecondaryButton onClick={showModal}>Add Item</SecondaryButton>
      </div>
      <div style={{ justifySelf: "end" }}>
        <PrimaryButton style={{ marginRight: "10rem" }} onClick={handleSubmit}>
          Submit
        </PrimaryButton>
      </div>
    </>
  );
}
