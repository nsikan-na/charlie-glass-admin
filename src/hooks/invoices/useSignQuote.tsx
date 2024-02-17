import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EQueryKey } from "../queryKey";
import showSuccessNotification from "../../screens/components/ant-design/notifications/showSuccessNotification";
import showErrorNotification from "../../screens/components/ant-design/notifications/showErrorNotification";
import { API_BASE_URL } from "../baseApiUrl";

const useSignInvoice = (id: any, onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (obj: any) =>
      await axios.post(`${API_BASE_URL}/api/v1/invoices/${id}/sign`, obj),
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET] });
      onSuccess && onSuccess();
      showSuccessNotification({
        description: data?.data?.message,
      });
    },
    onError: (error: any) => {
      showErrorNotification({
        description: error?.response?.data?.message,
      });
    },
  });
};

export default useSignInvoice;
