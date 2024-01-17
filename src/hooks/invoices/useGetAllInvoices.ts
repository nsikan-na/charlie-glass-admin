import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useGetAllInvoices = (params: any) => {
  const { user } = useContext(Context);
  const response = useQuery({
    queryKey: [EQueryKey.GET_ALL_INVOICES, params],
    enabled: !!user?.userId,
    queryFn: async () =>
      await axios.get<any>(
        `${EBaseUrl.CGI_API}/api/v1/${user?.userId}/quotes`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.accessToken}`,
          },
          params,
        }
      ),
  });
  const { error, isError } = response;

  if(isError && ){

  }

  return response;
};

export default useGetAllInvoices;
