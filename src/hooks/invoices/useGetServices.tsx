import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { Context } from "../../context";
import { useContext } from "react";

export const useGetServices = () => {
  const { user } = useContext(Context);
  return useQuery({
    queryKey: [EQueryKey.SERVICES, user?.userId],
    enabled: !!user?.userId,
    queryFn: async () => {
      const response = await axios.get(
        `${EBaseUrl.CGI_API}/api/v1/${user?.userId}/quotes/services`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.accessToken}`,
          },
        }
      );
      return response.data;
    },
  });
};
