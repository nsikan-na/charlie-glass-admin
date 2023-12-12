import Invoice from "../screens/invoice/Invoice";
import Layout from "../layout/Layout";
import PdfTemplate from "../util/pdf/PdfTemplate";
import PDfDownloadButton from "../util/pdf/PdfDownloadButton";
// import Login from "../screens/login/LogIn";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Invoice />,
      },
      // {
      //   path: "/dynamic-table",
      //   element: <DynamicTable />,
      // },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
];
