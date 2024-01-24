// import { Input } from "antd";
import { Button } from 'antd';
import InvoiceDetailsInput from './NewInvoiceDetails';
import InvoiceServicesInput from './CreateNewService';
import { useEffect, useState } from 'react';
import PrimaryButton from '../../components/ant-design/buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { ERoute } from '../../../routing/helpers';

export default function CreateNewInvoice({ handleIsCreateScreenOpen }: any) {
  const [cartItems, setCart]: any = useState([]);

  const [invoice, setInvoice]: any = useState({
    receiver_name: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    items: [],
    services: []
  });

  const navigate = useNavigate();

  useEffect(() => {
    setInvoice((invoice: any) => ({ ...invoice, items: cartItems }));
  }, [cartItems]);

  return (
    <div className="px-52 py-8">
      <div
        style={{
          width: '70%'
        }}
      >
        <PrimaryButton onClick={handleIsCreateScreenOpen}>Back</PrimaryButton>
      </div>
      <div
        style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
      >
        <div style={{ textAlign: 'justify' }} className="text-2xl">
          Create New Invoice
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateRows: '8rem ',
            marginTop: '3rem',
            width: '70%',
            marginRight: '0'
          }}
        >
          <InvoiceDetailsInput setCart={setCart} setInvoice={setInvoice} />
          <InvoiceServicesInput
            invoice={invoice}
            cartItems={cartItems}
            setCart={setCart}
            setInvoice={setInvoice}
          />
        </div>
      </div>
    </div>
  );
}
