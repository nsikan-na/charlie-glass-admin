import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../util/queryKey";
import { EBaseUrl } from "../util/baseUrl";

type TProps = {
  invoiceId: number;
};

const useGetInvoiceById = ({ invoiceId }: TProps) => {
  return useQuery({
    queryKey: [EQueryKey.GET_INVOICE_BY_ID],
    queryFn: async () =>
      await axios.get(`${EBaseUrl.CGI_API}/api/v1/invoices/5/${invoiceId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
  });
};

export default useGetInvoiceById;
