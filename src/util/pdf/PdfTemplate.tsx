import {
  Page,
  Text,
  View,
  Image,
  Document,
  PDFViewer,
  StyleSheet,
} from "@react-pdf/renderer";
import { useContext } from "react";
import { Context } from "../../context";
import { formatDate } from "../helpers";

const PdfTemplate = () => {
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

  const {
    id: invoice_id,
    cart,
    receiver_name,
    creation_date,
    street,
    city,
    state,
    zip,
  } = dataset;
  return (
    <PDFViewer style={{ width: "100%", height: "60vh" }}>
      <Document>
        <Page size={"A4"}>
          <View style={{ padding: 50 }}>
            <Image
              src="titleicon.png"
              style={{
                position: "absolute",
                minWidth: "100%",
                minHeight: "100%",
                display: "flex",
                height: "50%",
                width: "60%",
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
                <Text style={{ fontSize: 35 }}>INVOICE</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text>{`${companyStreet}                   ${phoneNumber}`}</Text>
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
                <Text style={{ margin: "5 0" }}>{street}</Text>
                <Text style={{ margin: "5 0" }}>
                  {city}, {state}
                </Text>
                <Text style={{ margin: "5 0" }}>{zip}, United States</Text>
              </View>

              <View style={{ flex: 1, fontSize: 12 }}>
                <Text style={{ margin: "5 0" }}>Invoice #</Text>
                <Text style={{ margin: "5 0" }}>Invoice Date</Text>
              </View>
              <View style={{ flex: 1, fontSize: 12 }}>
                <Text style={{ margin: "5 0" }}>{invoice_id}</Text>
                <Text style={{ margin: "5 0" }}>
                  {formatDate(creation_date)}
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
                  <Text style={{ flex: 1 }}>S.No.</Text>
                  <Text style={{ flex: 3 }}>Product</Text>
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
                {cart.map(({ description, price, quantity }: any, idx) => (
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        margin: "5 0",
                      }}
                    >
                      <Text style={{ flex: 1 }}>{idx + 1}.</Text>
                      <Text style={{ flex: 3 }}>{description}</Text>
                      <Text style={{ flex: 1 }}>{quantity}</Text>
                      <Text style={{ flex: 1 }}>{`$${price}`}</Text>
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
                ))}
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
                <Text style={{ flex: 1 }}>Total</Text>
                <Text style={{ flex: 1 }}>$64.86</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "100",
              }}
            >
              <Text style={{ fontSize: 10 }}>Thank you for your business.</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfTemplate;

const dataset = {
  id: 135,
  user_id: 4,
  receiver_name: "Jon Snow",
  creation_date: "2023-12-11T00:00:00.000Z",
  street: "456 Oak St",
  city: "Townsville",
  state: "NY",
  zip: "54321",
  cart: [
    {
      cart_item_id: 81,
      description: "Product C",
      quantity: 3,
      price: "9.99",
    },
    {
      cart_item_id: 82,
      description: "Product A",
      quantity: 3,
      price: "9.99",
    },
    {
      cart_item_id: 81,
      description: "Product C",
      quantity: 3,
      price: "9.99",
    },
    {
      cart_item_id: 82,
      description: "Product A",
      quantity: 3,
      price: "9.99",
    },
  ],
  services: [
    {
      service_id: 27,
      service_label: "Service D",
    },
    {
      service_id: 28,
      service_label: "Service E",
    },
  ],
};
