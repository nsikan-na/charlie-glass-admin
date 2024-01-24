import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { EQueryKey } from '../queryKey';
import { EBaseUrl } from '../baseUrl';
import { Context } from '../../context';
import { useContext } from 'react';

const useGetInvoiceById = (invoiceId: any) => {
  const { user } = useContext(Context);

  return useQuery({
    queryKey: [
      EQueryKey.GET,
      EQueryKey.GET_INVOICE_BY_ID,
      invoiceId,
      user?.userId
    ],
    enabled: !!user?.userId && !!invoiceId,
    queryFn: async () =>
      await axios.get<any>(`${EBaseUrl.CGI_API}/api/v1/quotes/${invoiceId}`)
  });
};

export default useGetInvoiceById;
