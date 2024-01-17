import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useGetServices = (params: any) => {
  const { user } = useContext(Context);
  return useQuery({
    queryKey: [EQueryKey.SERVICES, params, user?.userId],
    enabled: !!user?.userId,
    queryFn: async () =>
      await axios.get<any>(
        `${EBaseUrl.CGI_API}/api/v1/${user?.userId}/reports/services`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.accessToken}`,
          },
          params,
        }
      ),
  });
};

export default useGetServices;