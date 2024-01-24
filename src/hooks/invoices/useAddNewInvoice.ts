import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";

const useAddNewInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (obj: any) =>
      await axios.post(`${EBaseUrl.CGI_API}/api/v1/quotes/add`, obj),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET] });
    },
  });
};

export default useAddNewInvoice;
