import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useGetProfits = (params: any) => {
  const { user }: any = useContext(Context);

  return useQuery({
    queryKey: [EQueryKey.PROFITS_REPORTS, params, user?.userId],
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
