import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfTemplate from "./PdfTemplate";

const PDfDownloadButton = () => (
  <PDFDownloadLink document={<PdfTemplate />} fileName="invoice.pdf">
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download now!"
    }
  </PDFDownloadLink>
);

export default PDfDownloadButton;
