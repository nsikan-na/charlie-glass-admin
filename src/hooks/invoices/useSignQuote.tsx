import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import { EBaseUrl } from "../baseUrl";
import showSuccessNotification from "../../screens/components/ant-design/notifications/showSuccessNotification";
import showErrorNotification from "../../screens/components/ant-design/notifications/showErrorNotification";

const useSignQuote = (id: any, onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (obj: any) =>
      await axios.post(`${EBaseUrl.CGI_API}/api/v1/quotes/${id}/sign`, obj),

    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET] });
      onSuccess && onSuccess();
      showSuccessNotification({
        description: data.data,
      });
    },
    onError: (error: any) => {
      showErrorNotification({
        description: error?.response?.data?.message,
      });
    },
  });
};

export default useSignQuote;
