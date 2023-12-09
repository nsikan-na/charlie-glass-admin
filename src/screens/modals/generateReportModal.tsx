import { Modal } from "antd";
import { useContext, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import _, { uniqueId } from "lodash";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import useGetReportDetails from "../../api/reports/getReportDetails";
import getReportData from "../../api/reports/getReportData";
import Input from "../components/Input";
type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const USER_KEY = "@UserKey";

type TParams = {
  [key: string]: any;
};

const GenerateReportModal: React.FC<TProps> = ({ isOpen, onClose }) => {
  const { setReportData, setReportParams, user, report } = useContext(Context);

  const [outputData, setOutputData] = useState<TParams>({});
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data } = useGetReportDetails();
  useEffect(() => {
    const myMap: TParams = {};

    data?.forEach(
      (item: TParams) => (myMap[item.parameterName.replaceAll("@", "")] = "")
    );

    myMap["UserKey"] = user?.userId;

    setOutputData(myMap);
  }, [data]);

  const handleParamChange = (e: any) => {
    setOutputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fetchReportData = async () => {
    const { dbName, schemaName, procedureName } = data[0];
    const response = await getReportData({
      user,
      dbName,
      schemaName,
      procedureName,
      procedureParams: {
        ...outputData,
      },
    });
    setReportData(response);
    setReportParams(
      Object.entries(outputData)
        .map((item) => ({ label: item[0], value: item[1] }))
        .filter((item) => item.label !== "UserKey")
    );
  };
  const handleOk = () => {
    queryClient.prefetchQuery(["reportData"], () =>
      fetchReportData().then(() => {
        onClose();
      })
    );
  };

  return (
    <Modal
      title={`${report.hotRptSourceName}`}
      open={isOpen}
      okText="Generate"
      onOk={handleOk}
      onCancel={onClose}
    >
      {data
        ?.filter(
          (item: any) =>
            item.parameterName.toLowerCase() !== USER_KEY.toLowerCase()
        )
        .map((item: any) => (
          <div key={uniqueId()}>
            <div style={{ margin: "1rem 0 .5rem 0" }}>
              {_.startCase(item.parameterName.replaceAll("@", ""))}
            </div>
            <Input
              style={{ width: "100%" }}
              value={outputData[item.parameterName.replaceAll("@", "")]}
              name={item.parameterName.replaceAll("@", "")}
              onChange={handleParamChange}
            />
          </div>
        ))}
    </Modal>
  );
};

export default GenerateReportModal;
