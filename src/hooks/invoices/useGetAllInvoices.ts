import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useGetAllInvoices = (params: any) => {
  const { user } = useContext(Context);
  return useQuery({
    queryKey: [EQueryKey.GET_ALL_INVOICES, params],
    enabled: !!user?.id,
    queryFn: async () =>
      await axios.get<any>(`${EBaseUrl.CGI_API}/api/v1/quotes/${user?.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        params,
      }),
  });
};

export default useGetAllInvoices;
