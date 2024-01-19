import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { Context } from "../../context";
import { useContext } from "react";

const useGetServices = () => {
  const { user }: any = useContext(Context);
  return useQuery({
    queryKey: [EQueryKey.SERVICES, user?.userId],
    enabled: !!user?.userId,
    queryFn: async () =>
      await axios.get(
        `${EBaseUrl.CGI_API}/api/v1/${user?.userId}/quotes/services`
      ),
  });
};

export default useGetServices;
