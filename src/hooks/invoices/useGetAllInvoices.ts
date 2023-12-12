import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../util/queryKey";
import { EBaseUrl } from "../util/baseUrl";

const useGetAllInvoices = () => {
  return useQuery({
    queryKey: [EQueryKey.GET_ALL_INVOICES],
    queryFn: async () =>
      await axios.get(`${EBaseUrl.CGI_API}/api/v1/invoices/6`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
  });
};

export default useGetAllInvoices;
