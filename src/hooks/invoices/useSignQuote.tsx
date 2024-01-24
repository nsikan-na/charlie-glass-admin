import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { EQueryKey } from '../queryKey';
import { EBaseUrl } from '../baseUrl';
import showSuccessNotification from '../../screens/components/ant-design/notifications/showSuccessNoti';
import showErrorNotification from '../../screens/components/ant-design/notifications/showErrorNoti';

const useSignQuote = (id: any, onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (obj: any) =>
      await axios.post(`${EBaseUrl.CGI_API}/api/v1/quotes/${id}/sign`, obj),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET] });

      onSuccess && onSuccess();
      showSuccessNotification({
        description: 'Quote signed successfully'
      });
    },
    onError: () => {
      showErrorNotification({
        description: 'Please complete all fields'
      });
    }
  });
};

export default useSignQuote;
