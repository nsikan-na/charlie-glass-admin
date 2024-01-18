import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../../routing/helpers";

const useGetAllInvoices = (params: any) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const response = useQuery({
    queryKey: [EQueryKey.GET_ALL_INVOICES, params, user?.userId],
    enabled: !!user?.userId,
    queryFn: async () =>
      await axios.get<any>(
        `${EBaseUrl.CGI_API}/api/v1/${user?.userId}/quotes`,
        {
          params,
        }
      ),
  });

  return response;
};

export default useGetAllInvoices;
