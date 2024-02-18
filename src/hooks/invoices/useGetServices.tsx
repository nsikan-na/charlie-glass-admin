import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { Context } from "../../context";
import { useContext } from "react";
import { API_BASE_URL } from "../baseApiUrl";

const useGetServices = () => {
  const { user } = useContext(Context);
  return useQuery({
    queryKey: [EQueryKey.GET, EQueryKey.SERVICES, user?.userId],
    queryFn: async () =>
      await axios.get(`${API_BASE_URL}/api/v1/invoices/services`),
  });
};

export default useGetServices;
