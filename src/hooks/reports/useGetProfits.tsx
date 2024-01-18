import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useGetProfits = (params: any) => {
  const { user, activeTab }: any = useContext(Context);

  return useQuery({
    queryKey: [EQueryKey.GET_ALL_INVOICES, params, user?.userId, activeTab],
    enabled: !!user?.userId,
    queryFn: async () =>
      await axios.get<any>(
        `${EBaseUrl.CGI_API}/api/v1/${user?.userId}/reports/profit`,
        {
          params,
        }
      ),
  });
};

export default useGetProfits;
