import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useAddNewInvoice = () => {
  const queryClient = useQueryClient();
  const { user } = useContext(Context);
  return useMutation({
    mutationFn: async (obj: any) =>
      await axios.post(
        `${EBaseUrl.CGI_API}/api/v1/${user?.userId}/quotes/add`,
        obj,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.accessToken}`,
          },
        }
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET_ALL_INVOICES] });
    },
    onError: (error: any) => {
      if (error.response && error.response.status === 401) {
        // Redirect to the login page
        // history.push("/login");
        
      }
    },
  });
};

export default useAddNewInvoice;
