import { useQuery } from "react-query";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../../context";
import { EService } from "../util/url";
export type TReportDetails = {
  dbName: string;
  procedureName: string;
  procedureParams: { [key: string]: any };
  schemaName: string;
};

const useGetReportDetails = () => {
  const { user, report } = useContext(Context);
  return useQuery({
    queryKey: ["reportDetails", report],
    queryFn: async () => {
      const response = await axios.get(
        `${EService.DAS_WEB}/api/v1/${user?.userId}/reports/reportdetails/${report.hotRptSourceId}`,
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

export default useGetReportDetails;
