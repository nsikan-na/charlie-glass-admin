import { Tag, Tooltip, Button } from "antd";
import { startCase, uniqueId } from "lodash";
import React, { useContext, useState } from "react";
import { Context } from "../../../context";
import { EditOutlined, RollbackOutlined } from "@ant-design/icons";
import GenerateReportModal from "../../modals/generateReportModal";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
const ReportsTable: React.FC = () => {
  const navigate = useNavigate();
  const { reportData, reportParams, report, setReport, setReportData } =
    useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = Object.keys(reportData?.[0] || [])?.map((item: any) => ({
    dataIndex: item,
    width: 250,
    title: () => <Tooltip title={startCase(item)}>{startCase(item)}</Tooltip>,
  }));

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleBackButtonClick = () => {
    setReport(null);
    setReportData(null);
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "1rem",
        }}
      >
        <Button icon={<RollbackOutlined />} onClick={handleBackButtonClick} />
        <div style={{ textAlign: "center" }}>
          <h1>{report?.hotRptSourceName}</h1>
          <div>
            {reportParams?.map((item: any) => (
              <Tag
                key={uniqueId()}
                style={{
                  margin: "0.5rem 0.5rem 0.5rem 0",
                  padding: ".25rem",
                }}
              >{`${startCase(item?.label)}: ${item?.value || "%"}`}</Tag>
            ))}
            <Button icon={<EditOutlined />} onClick={handleEditClick} />
          </div>
        </div>
        <Table dataSource={reportData || []} columns={columns || []} />
      </div>
      <GenerateReportModal isOpen={isModalOpen} onClose={handleCancel} />
    </>
  );
};

export default ReportsTable;
