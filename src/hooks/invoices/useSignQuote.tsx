import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import { useContext } from "react";
import { Context } from "../../context";

const useSignQuote = (id: any) => {
  const queryClient = useQueryClient();
  const { user } = useContext(Context);
  return useMutation({
    mutationFn: async (obj: any) =>
      await axios.post(
        `${EBaseUrl.CGI_API}/api/v1/${user?.userId}/quotes/${id}/sign`,
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
  });
};

export default useSignQuote;
