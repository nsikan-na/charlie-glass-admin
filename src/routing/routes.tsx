import Invoice from "../screens/invoice/Invoice";
import Layout from "../layout/Layout";
import CreateNewInvoice from "../screens/create-new-invoice/CreateNewInvoice";

import Login from "../screens/login/LogIn";
import { RouteObject } from "react-router";
import Root from "../layout/Root";
import { ERoute } from "./helpers";

export const routes: RouteObject[] = [
  {
    path: ERoute.ROOT,
    element: <Layout />,
    children: [
      {
        path: ERoute.ROOT,
        element: <Root />,
      },
      {
        path: ERoute.INVOICE,
        children: [
          { path: ERoute.INVOICE, element: <Invoice /> },
          {
            path: ERoute.CREATE_INVOICE,
            element: <CreateNewInvoice />,
          },
        ],
      },
    ],
  },
  {
    path: ERoute.LOGIN,
    element: <Login />,
  },
];
