import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { useContext } from "react";
import { Context } from "../../context";
import { API_BASE_URL } from "../baseApiUrl";

const useGetReportProfits = (params: any) => {
  const { user } = useContext(Context);

  return useQuery({
    queryKey: [EQueryKey.GET, EQueryKey.REPORT_PROFITS, params, user?.userId],
    queryFn: async () =>
      await axios.get<any>(`${API_BASE_URL}/api/v1/reports/profit`, {
        params,
      }),
  });
};

export default useGetReportProfits;
