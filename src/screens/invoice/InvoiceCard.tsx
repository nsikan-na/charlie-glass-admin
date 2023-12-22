import { Button, Card } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { formatDate } from "../../util/helpers";
import { uniqueId } from "lodash";

export default function InvoiceCard({
  setCurrentInvoice,
  invoice,
  showModal,
}: any) {
  function handleClick() {
    setCurrentInvoice(invoice.quote_id);
  }

  return (
    <div className="flex justify-center">
      <Card
        onClick={handleClick}
        style={{ width: 350, margin: ".5rem 1rem" }}
        title={
          <div style={{ fontWeight: 400, fontSize: ".9rem" }}>
            {formatDate(invoice?.creation_date)}
          </div>
        }
        actions={[
          <Button
            className=" border-none" //text-sky-400
            icon={
              <PlayCircleOutlined
                onClick={showModal}
                style={{ fontSize: "1.5rem" }}
                className=""
              />
            }
          />,
        ]}
      >
        <div>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              height: "6rem",
            }}
          >
            <div style={{ marginTop: "1rem" }} className="text-2xl">
              {invoice?.receiver_name}
            </div>
            <div className="text-lg">{invoice?.quote_id}</div>
            <div
              style={{
                display: "grid",
                justifyContent: "space-between",
                gridTemplateColumns: "6rem  6rem  6rem",
              }}
              className=""
            >
              {invoice?.services?.map((service: any) => (
                <div key={uniqueId()} className="">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
