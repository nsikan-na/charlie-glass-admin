import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../util/queryKey";
import { EBaseUrl } from "../util/baseUrl";

type TProps = {};

const useAddNewInvoice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () =>
      await axios.post(`${EBaseUrl.CGI_API}/api/v1/invoices/6/add`, myBody),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET_ALL_INVOICES] });
    },
  });
};

export default useAddNewInvoice;

const myBody = {
  receiver_name: "Juice Wrld",
  street: "456 Oak St",
  city: "Townsville",
  state: "NY",
  zip: "54321",
  cart: [
    {
      description: "Product C",
      quantity: 3,
      price: "9.99",
    },
    {
      description: "Product A",
      quantity: 3,
      price: "9.99",
    },
  ],
  services: [27, 28],
};
