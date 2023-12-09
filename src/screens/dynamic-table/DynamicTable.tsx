import { Tooltip } from "antd";
import { startCase } from "lodash";
import React, { useEffect, useState } from "react";
import getDynamicTableData from "../../api/light-reports/getDynamicTableData";
import { DATE_FORMAT } from "../../helpers/helpers";
import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import Table from "../components/Table";
import _ from "lodash";
import Input from "../components/Input";

type TUserInputData = {
  dbName: string;
  schemaName: string;
  tableName: string;
  fromDate?: string;
  toDate?: string;
};

const initialUserInput = {
  dbName: "",
  schemaName: "",
  tableName: "",
};

const DynamicTable: React.FC = () => {
  const [userInput, setUserInput] = useState<TUserInputData>(initialUserInput);
  const [input, setInput] = useState<TUserInputData | null>(null);
  const { data } = getDynamicTableData(input);

  const columns = Object.keys(data?.[0] || [])?.map((item) => ({
    key: item,
    dataIndex: item,
    width: 250,
    title: () => <Tooltip title={startCase(item)}>{startCase(item)}</Tooltip>,
  }));

  useEffect(() => {
    setUserInput(initialUserInput);
    setInput(null);
  }, []);

  const handleChange = (key: string, value: string) => {
    setUserInput((prev) => ({ ...prev, [key]: value }));
  };

  const handleButtonClick = () => setInput(userInput);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "1rem",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Dynamic Table</h1>
        <div>
          <span>
            <InputLabel>Database Name</InputLabel>
            <StyledInput
              onChange={(e: any) => handleChange("dbName", e.target.value)}
            />
          </span>
          <InputWrapper>
            <InputLabel>Schema Name</InputLabel>
            <StyledInput
              onChange={(e: any) => handleChange("schemaName", e.target.value)}
            />
          </InputWrapper>
          <span>
            <InputLabel>Table Name</InputLabel>
            <StyledInput
              onChange={(e: any) => handleChange("tableName", e.target.value)}
            />
          </span>
        </div>
        <div style={{ margin: "1rem" }}>
          <span>Filters</span>
          <InputWrapper>
            <InputLabel>From Date</InputLabel>
            <StyledInput
              onChange={(e: any) => handleChange("fromDate", e)}
              placeholder={DATE_FORMAT}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>To Date</InputLabel>
            <StyledInput
              onChange={(e: any) => handleChange("toDate", e)}
              placeholder={DATE_FORMAT}
            />
          </InputWrapper>
        </div>
        <PrimaryButton
          style={{ margin: "0 0 1rem 0" }}
          onClick={handleButtonClick}
        >
          Go
        </PrimaryButton>
      </div>
      <Table dataSource={data || []} columns={columns || []} />
    </div>
  );
};

export default DynamicTable;

const InputLabel = styled.span`
  margin: 0 0.5rem;
`;

const InputWrapper = styled.span`
  margin: 0 2rem;
`;

const StyledInput = styled(Input)`
  width: 250px;
`;
