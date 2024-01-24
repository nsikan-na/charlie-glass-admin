import { Modal } from 'antd';
import SecondaryButton from '../components/ant-design/buttons/SecondaryButton';
import Input from '../components/ant-design/form/Input';
import { useEffect, useState } from 'react';
import type { DatePickerProps } from 'antd';
import DatePicker from '../components/ant-design/form/DatePicker';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useSignQuote from '../../hooks/invoices/useSignQuote';
import PrimaryButton from '../components/ant-design/buttons/PrimaryButton';

export default function SignModal({
  isSignModalOpen,
  closeSignModal,
  currentInvoice
}: any) {
  const [input, setInput] = useState({
    expense: 0,
    signature_date: ''
  });
  const handleInputChange = (key: string) => (e: any) => {
    setInput((i) => ({ ...i, [key]: e.target.value }));
  };
  const onChange: DatePickerProps['onChange'] = (key: any, dateString) => {
    setInput((i) => ({ ...i, signature_date: dateString }));
  };

  const add = useSignQuote(currentInvoice, closeSignModal);

  return (
    <Modal
      title={'Signed'}
      open={isSignModalOpen}
      onCancel={closeSignModal}
      footer={() => (
        <div className="flex justify-end ">
          <SecondaryButton className="mr-2" onClick={closeSignModal}>
            Cancel
          </SecondaryButton>
          <PrimaryButton
            onClick={() => {
              add.mutate(input);
            }}
          >
            Submit
          </PrimaryButton>
        </div>
      )}
    >
      <div className="my-4 w-full">
        <div>Signature Date </div>
        <DatePicker
          onChange={onChange}
          className="w-full"
          style={{ width: '100%' }}
        />
      </div>
      <div className="my-4  w-full">
        <div>Expense</div>
        <Input
          type="number"
          min={0}
          onChange={handleInputChange('expense')}
          allowClear
        />
      </div>
    </Modal>
  );
}
