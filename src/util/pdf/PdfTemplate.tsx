import {
  Page,
  Text,
  View,
  Image,
  Document,
  PDFViewer,
} from "@react-pdf/renderer";

const PdfTemplate = () => {
  return (
    <PDFViewer style={{ width: "100%", height: "70vh" }} showToolbar={false}>
      <Document>
        <Page size={"A3"}>
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
                <View>
                  <Text>326 50th Street</Text>
                  <Text>(718)-765-0087</Text>
                  <Text>chalieglassinc@gmail.com</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
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
              <View>
                <Text>Bill To</Text>
                <Text>Mr. Nick Tsoukalas</Text>
                <Text>330 7th Ave Unit 83</Text>
                <Text>New York, New York</Text>
                <Text>Manhattan</Text>
                <Text>10001</Text>
                <Text>United States</Text>
              </View>
              <View>
                <Text>Ship To</Text>
                <Text>Mr. Nick Tsoukalas</Text>
                <Text>N&A General Contruction Corp.</Text>
                <Text>330 7th Ave Unit 83</Text>
                <Text>New York, New York, Manhattan</Text>
                <Text>10001, United States</Text>
              </View>
              <View>
                <Text>Invoice No. 1010</Text>
                <Text>Invoice Date 2023-03-16</Text>
                <Text>Terms Net 30</Text>
                <Text>Due Date 2023-04-15</Text>
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
                <Text style={{ flex: 5 }}>Product</Text>
                <Text style={{ flex: 1 }}>Quantity</Text>
                <Text style={{ flex: 1 }}>Price</Text>
              </View>
              {dataset.cart.map(({ description, price, quantity }) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ flex: 5 }}>{description}</Text>
                  <Text style={{ flex: 1 }}>{quantity}</Text>
                  <Text style={{ flex: 1 }}>{`$${price}`}</Text>
                </View>
              ))}
            </View>
            <View style={{ margin: "15 0" }}>
              {[
                { label: "Subtotal", amount: 59.44 },
                { label: "Sales Tax", amount: 5.42 },
                { label: "TOTAL", amount: 64.86 },
              ].map(({ label, amount }) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={{ flex: 5 }}></Text>
                  <Text style={{ flex: 1 }}>{label}</Text>
                  <Text style={{ flex: 1 }}>{`$${amount}`}</Text>
                </View>
              ))}
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
              <Text>Payment is due within 15 days</Text>
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
