import { useState } from "react";
import { TReportData, TReportParams, TUser } from "../types/types";
import { TGetReportData } from "../api/reports/getReportData";

export const useGetInitialContext = () => {
  const [reportData, setReportData] = useState<TReportData | null>(null);
  const [reportParams, setReportParams] = useState<TReportParams | null>(null);
  const [report, setReport] = useState<TGetReportData | null>(null);
  const [user, setUser] = useState<TUser | null>(null);
  return {
    reportData,
    setReportData,
    reportParams,
    setReportParams,
    report,
    setReport,
    user,
    setUser,
  };
};
