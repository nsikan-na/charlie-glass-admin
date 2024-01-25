import axios from "axios";
import { EBaseUrl } from "../baseUrl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EQueryKey } from "../queryKey";
import { useContext } from "react";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import setLocalStorage from "../localstorage/setLocalStorage";
import ELocalStorage from "../../util/enums/localStorage";
import { ERoute } from "../../util/enums/routes";
import showErrorNotification from "../../screens/components/ant-design/notifications/showErrorNoti";
import showSuccessNotification from "../../screens/components/ant-design/notifications/showSuccessNoti";

type TLoginInput = {
  username: string;
  password: string;
};

const useLogin = () => {
  const { setUser }: any = useContext(Context);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (obj: TLoginInput) =>
      await axios.post(`${EBaseUrl.CGI_API}/api/v1/login`, obj, {
        headers: { Authorization: undefined },
      }),
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET] });

      setUser(data?.data);
      setLocalStorage(ELocalStorage.USER, data?.data);
      navigate(ERoute.ROOT);
    },

    onError: (error: any) => {
      showErrorNotification({ description: error?.response?.data?.message });
    },
  });
};

export default useLogin;
