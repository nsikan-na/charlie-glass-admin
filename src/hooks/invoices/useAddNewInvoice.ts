import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../util/queryKey";
import { EBaseUrl } from "../util/baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useAddNewInvoice = () => {
  const queryClient = useQueryClient();
  const { user } = useContext(Context);
  return useMutation({
    mutationFn: async (obj: TSaveInvoice) =>
      await axios.post(
        `${EBaseUrl.CGI_API}/api/v1/invoices/${user?.id}/add`,
        obj
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET_ALL_INVOICES] });
    },
  });
};

export default useAddNewInvoice;

export type CartItem = {
  description: string;
  quantity: number;
  price: string;
};

export type TSaveInvoice = {
  receiver_name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  cart: CartItem[];
  services: number[];
};
