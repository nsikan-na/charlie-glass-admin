import { Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { uniqueId } from 'lodash';
import { useNavigate } from 'react-router-dom';
import AddedToCart from './AddedToCart';
import PrimaryButton from '../../components/ant-design/buttons/PrimaryButton';
import SecondaryButton from '../../components/ant-design/buttons/SecondaryButton';
import CreateNewInvoiceModal from '../../modals/invoice/InvoiceAddToCartModal';
import useAddNewInvoice from '../../../hooks/invoices/useAddNewInvoice';
import useGetServices from '../../../hooks/invoices/useGetServices';

import Spinner from '../../components/ant-design/loading/spinner';
import showErrorNotification from '../../components/ant-design/notifications/showErrorNoti';
import showSuccessNotification from '../../components/ant-design/notifications/showSuccessNoti';
import { ERoute } from '../../../util/enums/routes';

export default function InvoiceServicesInput({
  setInvoice,
  invoice,
  setCart,
  cartItems
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
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

  const add = useAddNewInvoice();

  function handleSubmit() {
    if (
      !invoice ||
      !invoice?.receiver ||
      !invoice?.city ||
      !invoice?.items ||
      !invoice?.services ||
      !invoice?.state ||
      !invoice?.street ||
      !invoice?.zip
    )
      return showErrorNotification({
        description: 'Please complete all fields'
      });

    add.mutate(invoice);
    navigate(ERoute.INVOICE);
    showSuccessNotification({
      description: 'Invoice submitted successfully'
    });
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
      <div className="my-10 text-center">
        <div style={{ justifySelf: 'center' }} className="text-lg">
          Services
        </div>
        <div className="flex justify-center mt-4">
          <Spinner spinning={isLoading}>
            {/* @ts-ignore */}
            <Checkbox.Group
              onChange={onChange}
              value={checkedServices}
              style={{
                display: 'grid',
                gridTemplateColumns: '12rem 12rem 12rem'
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
      <div className="my-10">
        {cartItems.length > 0 ? (
          <div
            style={{ justifySelf: 'center' }}
            className=" text-center text-lg"
          >
            Current Items
          </div>
        ) : null}
        <div className="">
          {cartItems?.map((item: any) => (
            <AddedToCart
              key={uniqueId()}
              description={item.description}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end ">
        <div className=" flex justify-between gap-5">
          <div>Total</div>

          <div>
            $
            {cartItems
              .map((item: any) => item.price)
              .reduce((acc: number, cur: number) => {
                return acc + cur;
              }, 0)}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <SecondaryButton onClick={showModal}>Add Item</SecondaryButton>
      </div>
      <div style={{ justifySelf: 'end' }}>
        <PrimaryButton style={{ marginRight: '10rem' }} onClick={handleSubmit}>
          Submit
        </PrimaryButton>
      </div>
    </>
  );
}