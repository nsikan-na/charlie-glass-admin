import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { Context } from "../../context";
import { useContext, useState } from "react";
import { TGetAllInvoicesResponse } from "./useGetAllInvoices";
import { d } from "@tanstack/react-query-devtools/build/legacy/devtools-ZdlRR-0P";

const useGetInvoiceById = (invoiceId: any) => {
  const { user } = useContext(Context);

  return useQuery({
    queryKey: [EQueryKey.GET_INVOICE_BY_ID, invoiceId],
    queryFn: async () =>
      await axios.get<TGetAllInvoicesResponse>(
        `${EBaseUrl.CGI_API}/api/v1/invoices/${user?.id}/${invoiceId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ),
  });
};

// function GetData() {
//   const x = useQuery({
//     queryKey: ["invoice"],
//     queryFn: async () => {
//       const response = await fetch("/api/invoice");
//       const data = await response.json();
//       return data;
//     },
//   });
//   console.log(x);
// }

export default useGetInvoiceById;

export type TCartItem = {
  cart_item_id: number;
  description: string;
  quantity: number;
  price: string;
};

export type TGetInvoiceByIdRequestParams = {
  invoiceId: number;
};

export type TService = {
  service_id: number;
  service_label: string;
};

export type TGetInvoiceByIdResponse = {
  id: number;
  user_id: number;
  creation_date: string;
  receiver_name: string;
  receiver_street: string;
  receiver_city: string;
  receiver_state: string;
  receiver_zip: string;
  cart: TCartItem[];
  services: TService[];
};
