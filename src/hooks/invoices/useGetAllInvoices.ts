import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { useContext } from "react";
import { Context } from "../../context";
import { API_BASE_URL } from "../baseApiUrl";

const useGetAllInvoices = (params: any) => {
  const { user } = useContext(Context);

  return useQuery({
    queryKey: [EQueryKey.GET, EQueryKey.GET_ALL_INVOICES, params, user?.userId],
    queryFn: async () =>
      await axios.get<any>(`${API_BASE_URL}/api/v1/invoices`, {
        params,
      }),
  });
};

export default useGetAllInvoices;
