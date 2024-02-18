import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";

import { Context } from "../../context";
import { useContext } from "react";
import { API_BASE_URL } from "../baseApiUrl";

const useGetInvoiceById = (invoiceId: any) => {
  const { user } = useContext(Context);

  return useQuery({
    queryKey: [
      EQueryKey.GET,
      EQueryKey.GET_INVOICE_BY_ID,
      invoiceId,
      user?.userId,
    ],
    enabled: !!invoiceId,
    queryFn: async () =>
      await axios.get<any>(`${API_BASE_URL}/api/v1/invoices/${invoiceId}`),
  });
};

export default useGetInvoiceById;
