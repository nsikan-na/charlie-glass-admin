import { EditOutlined, FileOutlined, NumberOutlined } from "@ant-design/icons";
import { Card, Space, Tag, Tooltip } from "antd";
import { EColors } from "../../util/enums/colors";
import { formatTimestampDate } from "../../util/helpers";

export default function MobileCards({
  listing,
  showSignModal,
  handleClick,
}: any) {
  return (
    <div>
      <Space direction="vertical" size={16}>
        <Card
          onClick={() => handleClick(listing)}
          style={{ borderColor: `${EColors.primary}`, width: 300 }}
          className="border-t-8 "
          title={
            <div className="flex justify-center ">
              <div>
                {listing.receiver_name}
                <div className="my-1 flex justify-center">
                  {listing.isSigned === 1 ? (
                    <Tag color="blue">Invoice</Tag>
                  ) : (
                    <Tag color="green">Quote</Tag>
                  )}
                </div>
              </div>
            </div>
          }
          extra={
            listing.isSigned === 0 ? (
              <Tooltip title="Sign">
                <EditOutlined
                  onClick={showSignModal}
                  style={{
                    fontSize: "3rem",
                    cursor: "pointer",
                    color: EColors.primary,
                  }}
                />
              </Tooltip>
            ) : null
          }
        >
          <div className="flex justify-center">
            <div>
              <div className="flex gap-2">
                <div> Listing Id:</div>
                <div className="font-extrabold">{listing.invoice_id}</div>
              </div>
              <div className="flex gap-2">
                <div className="text-sm"> Creation Date:</div>
                <div className="font-extrabold">
                  {formatTimestampDate(listing.creation_date)}
                </div>
              </div>
              <div className="flex gap-2">
                <div className="text-sm"> Signature Date:</div>
                <div className="font-extrabold">
                  {listing.signature_date === null ? (
                    <div>{"-"}</div>
                  ) : (
                    <div>{formatTimestampDate(listing.signature_date)}</div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <div> Profit:</div>
                <div className="font-extrabold">
                  {listing.profit === null ? (
                    <div>{"-"}</div>
                  ) : (
                    <Tag color="green">{listing.profit}</Tag>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <div> Revenue:</div>
                <div className="font-extrabold">
                  {listing.revenue === null ? (
                    <div>{"-"}</div>
                  ) : (
                    <Tag color="blue">{listing.revenue}</Tag>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <div> Expense:</div>
                <div className="font-extrabold">
                  {listing.expense === null ? (
                    <div>{"-"}</div>
                  ) : (
                    <Tag color="red">{listing.expense}</Tag>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Space>
    </div>
  );
}

export function NewMobileCard({ listing, showSignModal, handleClick }: any) {
  console.log("listing", listing);
  return (
    <Card
      extra={
        listing.isSigned === 0 ? (
          <Tooltip title="Sign">
            <EditOutlined
              onClick={showSignModal}
              style={{
                fontSize: "2rem",
                cursor: "pointer",
                color: EColors.primary,
              }}
            />
          </Tooltip>
        ) : null
      }
      onClick={() => handleClick(listing)}
      style={{ borderColor: `${EColors.primary}`, width: 300 }}
      className="border-t-8 "
      title={
        <div className="flex justify-between">
          <div>
            {listing.isSigned === 1 ? (
              <Tooltip title={"Invoice"}>
                <FileOutlined
                  style={{ color: EColors.blue, fontSize: "1.5rem" }}
                />
              </Tooltip>
            ) : (
              <Tooltip title={"Quote"}>
                <FileOutlined
                  style={{ color: EColors.green_6, fontSize: "1.5rem" }}
                />
              </Tooltip>
            )}
          </div>
          <div className="text-2xl">#{listing.invoice_id}</div>
          <div>
            {listing.profit === null ? (
              <div>{""}</div>
            ) : (
              <Tag color="green">{listing.profit}</Tag>
            )}
          </div>
        </div>
      }
    >
      <div className="flex justify-center">
        <div className="grid grid-cols-1">
          <div className="justify-self-center">{listing.receiver_name}</div>
          <div>Creation Date: {formatTimestampDate(listing.creation_date)}</div>
          <div>
            Signature Date:{" "}
            {listing.signature_date === null
              ? ""
              : formatTimestampDate(listing.signature_date)}
          </div>
        </div>
      </div>
    </Card>
  );
}
