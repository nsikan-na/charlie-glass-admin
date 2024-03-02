import { Card, Tag } from "antd";
import Tooltip from "../../components/ant-design/Tooltip";
import { EColors } from "../../../util/enums/colors";
import { EditOutlined, FileOutlined } from "@ant-design/icons";
import { formatTimestampDate } from "../../../util/helpers";

export function NewMobileCard({ listing, showSignModal, handleClick }: any) {
  return (
    <Card
      onClick={handleClick(listing)}
      style={{ borderTopColor: `${EColors.primary}` }}
      className="border-t-8 "
      title={
        <div className="flex justify-between">
          <div>
            {listing?.isSigned === 1 ? (
              <Tooltip title={"Invoice"}>
                <FileOutlined style={{ color: EColors.blue }} />
              </Tooltip>
            ) : (
              <Tooltip title={"Quote"}>
                <FileOutlined style={{ color: EColors.green_6 }} />
              </Tooltip>
            )}
          </div>
          <div className="text-2xl">#{listing?.invoice_id}</div>
          <div>
            {listing?.signature_date ? (
              <div>
                <Tag color="green">{listing?.profit}</Tag>
              </div>
            ) : (
              <Tooltip title="Sign">
                <EditOutlined
                  onClick={showSignModal}
                  style={{
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    color: EColors.primary,
                  }}
                />
              </Tooltip>
            )}
          </div>
        </div>
      }
    >
      <div className="flex justify-center">
        <div className="grid grid-cols-1">
          <div className="justify-self-center text-xl mb-2">{listing?.receiver_name}</div>
          <div>
            Creation Date: {formatTimestampDate(listing?.creation_date)}
          </div>
          <div>
            Signature Date: {""}
            {!listing?.signature_date
              ? "-"
              : formatTimestampDate(listing?.signature_date)}
          </div>
        </div>
      </div>
    </Card>
  );
}
