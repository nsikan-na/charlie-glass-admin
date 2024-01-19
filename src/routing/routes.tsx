import Invoice from "../screens/invoice/Invoice";
import Layout from "../layout/Layout";
import CreateNewInvoice from "../screens/create-new-invoice/CreateNewInvoice";

import Login from "../screens/login/LogIn";
import { RouteObject } from "react-router";
import { ERoute } from "./helpers";
import Main from "../screens/invoice/Main";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ERoute.LOGIN,
        element: <Login />,
      },
      {
        path: ERoute.INVOICE,
        children: [
          { path: ERoute.INVOICE, element: <Main /> },
          {
            path: ERoute.CREATE_INVOICE,
            element: <CreateNewInvoice />,
          },
        ],
      },
    ],
  },
];
