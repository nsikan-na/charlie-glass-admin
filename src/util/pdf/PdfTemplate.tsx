import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
import styled from "styled-components";

// 326 50th st.
// Brooklyn, NY 11220
// Get Directions
// 718-765-0087
// info@charlieglassinc.com
const PdfTemplate = () => {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page>
          <View style={{ display: "flex", justifyContent: "space-between" }}>
            <View>
              <Text style={{ color: "blue" }}>INVOICE</Text>
              <View>
                <Text>326 50th Street</Text>
                <Text>(718)-765-0087</Text>
                <Text>chalieglassinc@gmail.com</Text>
              </View>
            </View>
            <View>
              <Text>Charlie Glass Inc</Text>
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
