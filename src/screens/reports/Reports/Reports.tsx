import { Card, Select } from "antd";
import { GlobalOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import _, { uniqueId } from "lodash";
import GenerateReportModal from "../../modals/generateReportModal";
import { Context } from "../../../context";
import useGetReportListing from "../../../api/reports/getReportListing";
import Input from "../../components/Input";
import ReportsTable from "./ReportTable";

type TFilters = {
  reportName: string;
  group: string;
};

const initialFilters: TFilters = {
  reportName: "",
  group: "",
};

const ReportsDashboard: React.FC = () => {
  const { report, setReport, reportData } = useContext(Context);
  const { data } = useGetReportListing();
  const [reportListing, setReportListing] = useState(data);
  const [filters, setFilters] = useState<TFilters>(initialFilters);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (selectedReport: any) => {
    setIsModalOpen(true);
    setReport(selectedReport);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleNameFilterChange = (e: any) => {
    setFilters((prev) => ({
      ...prev,
      reportName: e.target.value?.toLowerCase().trim() || "",
    }));
  };

  const groupFilterOptions = _.uniq(
    data?.map((item: any) => item.hotRptCategoryName)
  ).map((item) => ({ label: item, value: item }));

  const handleGroupFilterChange = (e: any) =>
    setFilters((prev) => ({
      ...prev,
      group: e?.toLowerCase().trim() || "",
    }));

  useEffect(() => {
    setReportListing(
      data?.filter(
        (item: any) =>
          item?.hotRptSourceName?.toLowerCase().includes(filters.reportName) &&
          item?.hotRptCategoryName?.toLowerCase().includes(filters.group)
      )
    );
  }, [filters, data]);

  return (
    <>
      {!reportData ? (
        <>
          <div style={{ backgroundColor: "white", padding: "1rem" }}>
            <div>
              <Input
                placeholder="Enter a report's name"
                onChange={handleNameFilterChange}
              />
              <Select
                style={{
                  width: "300px",
                  margin: "0 0 0 2rem",
                }}
                placeholder="Select a group"
                options={groupFilterOptions}
                onChange={handleGroupFilterChange}
                allowClear
              />
            </div>
            <section
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                overflowY: "scroll",
                height: "75vh",
                padding: "1.5rem 1rem",
                margin: "1rem 0",
              }}
            >
              {reportListing?.map((item: any) => (
                <Card
                  key={uniqueId()}
                  style={{ width: "300px", margin: ".5rem 1rem" }}
                  title={
                    <div style={{ fontWeight: 400, fontSize: ".9rem" }}>
                      {item?.hotRptCategoryName}
                    </div>
                  }
                  actions={[
                    <PlayCircleOutlined
                      style={{ fontSize: "1.5rem" }}
                      onClick={() => showModal(item)}
                    />,
                  ]}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <GlobalOutlined style={{ fontSize: "2.5rem" }} />
                    </div>

                    <div
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: "450",
                        textAlign: "center",
                        margin: ".5rem 0 0 0",
                      }}
                    >
                      {item?.hotRptSourceName}
                    </div>
                  </div>
                </Card>
              ))}
            </section>
          </div>
        </>
      ) : (
        <ReportsTable />
      )}
      {report ? (
        <GenerateReportModal isOpen={isModalOpen} onClose={handleCancel} />
      ) : null}
    </>
  );
};

export default ReportsDashboard;
