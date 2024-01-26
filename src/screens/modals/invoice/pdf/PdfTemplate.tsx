import {
  Page,
  Text,
  View,
  Image,
  Document,
  PDFViewer,
} from "@react-pdf/renderer";
import { useContext } from "react";
import { Context } from "../../../../context";
import {
  decimalThousandsCommaSeparated,
  formatTimestampDate,
} from "../../../../util/helpers";
import { uniqueId } from "lodash";

const PdfTemplate = ({ invoiceData }: any) => {
  const {
    companyDetails: {
      email,
      phoneNumber,
      street: companyStreet,
      state: companyState,
      city: companyCity,
      zip: companyZip,
    },
  } = useContext(Context);

  if (!invoiceData) return <div></div>;

  const {
    id: invoice_id,
    items,
    receiver_name,
    creation_date,
    receiver_street,
    receiver_city,
    receiver_state,
    receiver_zip,
  } = invoiceData;

  const total = decimalThousandsCommaSeparated(
    items
      ?.map((item: any) => Number(item.item_price))
      .reduce((acc: any, cur: any) => {
        acc += cur;
        return acc;
      }, 0),
  );

  return (
    <PDFViewer style={{ width: "100%", height: "60vh" }}>
      <Document
        title={
          invoiceData.isSigned === 0
            ? `Invoice #${invoice_id}`
            : `Invoice #${invoice_id}`
        }
      >
        <Page size={"A4"}>
          <View style={{ paddingTop: 70, paddingLeft: 50 }}>
            <Image
              src="titleicon.png"
              style={{
                position: "absolute",
                minWidth: "100%",
                minHeight: "100%",
                display: "flex",
                marginTop: "25vh",
                alignSelf: "center",
                height: "15%",
                width: "50%",
                opacity: 0.05,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "30",
              }}
            >
              <View style={{ flex: 3, fontSize: 10 }}>
                <Text style={{ fontSize: 35 }}>
                  {invoiceData.isSigned === 0 ? "Invoice" : "INVOICE"}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text>{`${companyStreet}                                ${phoneNumber}`}</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text>{`${companyCity}, ${companyState} ${companyZip}        ${email}`}</Text>
                </View>
              </View>
              <View style={{ flex: 2 }}>
                <Image src="/logo2.png" style={{ width: "90%" }} />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "30 0",
              }}
            >
              <View style={{ flex: 4, fontSize: 12 }}>
                <Text style={{ margin: "5 0" }}>Ship To:</Text>
                <Text style={{ margin: "5 0" }}>{receiver_name}</Text>
                <Text style={{ margin: "5 0" }}>{receiver_street}</Text>
                <Text style={{ margin: "5 0" }}>
                  {receiver_city}, {receiver_state}
                </Text>
                <Text style={{ margin: "5 0" }}>
                  {receiver_zip}, United States
                </Text>
              </View>

              <View style={{ flex: 1, fontSize: 12 }}>
                <Text style={{ margin: "5 0" }}>Invoice #</Text>
                <Text style={{ margin: "5 0" }}>Invoice Date</Text>
              </View>
              <View style={{ flex: 1, fontSize: 12 }}>
                <Text style={{ margin: "5 0" }}>{invoice_id}</Text>
                <Text style={{ margin: "5 0" }}>
                  {formatTimestampDate(creation_date)}
                </Text>
              </View>
            </View>
            <View style={{ margin: "30 0" }}>
              <View style={{ margin: "10 0", fontSize: 12 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "5 0",
                  }}
                >
                  <Text style={{ flex: 1 }}></Text>
                  <Text style={{ flex: 3 }}>Product</Text>
                  <Text style={{ flex: 1 }}></Text>
                  <Text style={{ flex: 1 }}>Quantity</Text>
                  <Text style={{ flex: 1 }}>Price</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ flex: 6, color: "lightgray" }}
                  >{`_______________________________________________________________________`}</Text>
                </View>
                {items?.map(
                  (
                    { item_description, item_price, item_quantity }: any,
                    idx: number,
                  ) => (
                    <View key={uniqueId()}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          margin: "5 0",
                        }}
                      >
                        <Text style={{ flex: 1 }}>{idx + 1}.</Text>
                        <Text style={{ flex: 3 }}>{item_description}</Text>
                        <Text style={{ flex: 1 }}></Text>
                        <Text style={{ flex: 1 }}>x{item_quantity}</Text>
                        <Text style={{ flex: 1 }}>{`$${item_price}`}</Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{ flex: 6, color: "lightgray" }}
                        >{`_______________________________________________________________________`}</Text>
                      </View>
                    </View>
                  ),
                )}
              </View>
              <View
                style={{
                  margin: "10 0",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  fontSize: 12,
                }}
              >
                <Text style={{ flex: 4 }}></Text>
                <Text style={{ flex: 1 }}></Text>
                <Text style={{ flex: 1 }}>Total</Text>
                <Text style={{ flex: 1 }}>${total}</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ marginRight: 10, fontSize: 10 }}>
                {invoiceData.isSigned === 0
                  ? " x_______________________"
                  : "Thank you for your bussiness"}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfTemplate;
