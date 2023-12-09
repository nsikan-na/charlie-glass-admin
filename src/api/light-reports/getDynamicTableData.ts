import { useQuery } from "react-query";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../../context";
import { EService } from "../util/url";

export type TGetDynamicTableProp = {
  dbName: string;
  schemaName: string;
  tableName: string;
  fromDate?: string;
  toDate?: string;
} | null;

const getDynamicTableData = (input: TGetDynamicTableProp) => {
  const { user } = useContext(Context);

  const response = useQuery({
    queryKey: ["tableData", input],
    queryFn: async () => {
      if (!input || !input?.dbName || !input?.schemaName || !input?.tableName) {
        return null;
      }

      const response = await axios.get(
        `${EService.DAS_WEB}/api/v1/lightreports`,
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
            "Content-Type": "application/json",
          },
          params: {
            dbName: input?.dbName || "",
            schemaName: input?.schemaName || "",
            tableName: input?.tableName || "",
            fromDate: input?.fromDate || undefined,
            toDate: input?.toDate || undefined,
          },
        }
      );

      return response.data;
    },
    staleTime: Infinity,
  });

  return response;
};

export default getDynamicTableData;
