import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useGetAllInvoices = () => {
  const { user } = useContext(Context);
  return useQuery({
    queryKey: [EQueryKey.GET_ALL_INVOICES],
    queryFn: async (params: any) =>
      await axios.get<TGetAllInvoicesResponse>(
        `${EBaseUrl.CGI_API}/api/v1/invoices/${user?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          params,
        }
      ),
  });
};

export default useGetAllInvoices;

export type TGetAllInvoicesRequestParams = {
  invoice_id?: number;
  name?: string;
  fromDate?: string;
  toDate?: string;
  pageSize?: number;
  page?: number;
};

export type TGetAllInvoicesResponse = {
  invoice_id: number;
  user_id: number;
  invoice_creation_date: string;
  receiver_name: string | null;
  invoice_services: string[];
}[];
