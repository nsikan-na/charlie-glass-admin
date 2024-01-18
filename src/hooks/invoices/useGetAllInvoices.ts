import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useGetAllInvoices = (params: any) => {
  const { user, activeTab }: any = useContext(Context);

  const { data, isLoading } = useQuery({
    queryKey: [EQueryKey.GET_ALL_INVOICES, params, user?.userId, activeTab],
    enabled: !!user?.userId,
    queryFn: async () =>
      await axios.get<any>(
        `${EBaseUrl.CGI_API}/api/v1/${user?.userId}/quotes`,
        {
          params,
        }
      ),
  });
  console.log(isLoading, data);
  return { data, isLoading };
};

export default useGetAllInvoices;
