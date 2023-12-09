import { useQuery } from "react-query";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../../context";
import { EService } from "../util/url";

const useGetReportListing = () => {
  const { user, report } = useContext(Context);
  return useQuery({
    queryKey: ["reportListing", report],
    queryFn: async () => {
      const response = await axios.get(
        `${EService.DAS_WEB}/api/v1/${user?.userId}/reports/reportlisting`,
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    staleTime: Infinity,
  });
};

export default useGetReportListing;
