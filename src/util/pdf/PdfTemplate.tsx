import {
  Page,
  Text,
  View,
  Image,
  Document,
  PDFViewer,
} from "@react-pdf/renderer";
import { useContext } from "react";
import { Context } from "../../context";

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
    date_of_invoice,
    street,
    city,
    state,
    zip,
  } = dataset;
  return (
    <PDFViewer style={{ width: "100%", height: "60vh" }}>
      <Document>
        <Page size={"A4"}>
          <View style={{ padding: 40 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 40 }}>INVOICE</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{companyStreet}</Text>
                  <Text>{phoneNumber}</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{`${companyCity}, ${companyState} ${companyZip}`}</Text>
                  <Text>{email}</Text>
                </View>
              </View>
              <View style={{ flex: 1.5 }}>
                <Image src="/logo2.png" style={{ width: "100%" }} />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "15 0",
              }}
            >
              <View style={{ flex: 4 }}>
                <Text>Ship To:</Text>
                <Text>{receiver_name}</Text>
                <Text>{street}</Text>
                <Text>
                  {city}, {state}
                </Text>
                <Text>{zip}, United States</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text>Invoice No.</Text>
                <Text>Invoice Date</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{invoice_id}</Text>
                <Text>{date_of_invoice}</Text>
              </View>
            </View>
            <View style={{ margin: "15 0" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ flex: 1 }}>S.No.</Text>
                <Text style={{ flex: 3 }}>Product</Text>
                <Text style={{ flex: 1 }}>Quantity</Text>
                <Text style={{ flex: 1 }}>Price</Text>
              </View>
              {cart.map(({ description, price, quantity }: any, idx) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ flex: 1 }}>{idx + 1}.</Text>
                  <Text style={{ flex: 3 }}>{description}</Text>
                  <Text style={{ flex: 1 }}>{quantity}</Text>
                  <Text style={{ flex: 1 }}>{`$${price}`}</Text>
                </View>
              ))}
            </View>
            <View
              style={{
                margin: "15 0",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ flex: 4 }}></Text>
              <Text style={{ flex: 1 }}>Total</Text>
              <Text style={{ flex: 1 }}>$64.86</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "15 0",
              }}
            >
              <Text>Thank you for your business.</Text>
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
  date_of_invoice: "2023-12-11T00:00:00.000Z",
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
