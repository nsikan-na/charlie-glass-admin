import axios from "axios";
import { TUser } from "../../types/types";
import { EService } from "../util/url";

export type TGetReportData = {
  user: TUser;
  dbName: string;
  procedureName: string;
  procedureParams: { [key: string]: any };
  schemaName: string;
};

const useGetReportData = async ({
  user,
  dbName,
  schemaName,
  procedureName,
  procedureParams,
}: TGetReportData) => {
  try {
    const response = await axios.post(
      `${EService.DAS_WEB}/api/v1/${user?.userId}/reports/reportdata`,
      {
        dbName,
        schemaName,
        procedureName,
        procedureParams,
      },
      {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return await response.data;
  } catch (err) {
    console.error(err);
  }
};

export default useGetReportData;
