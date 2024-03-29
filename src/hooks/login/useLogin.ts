import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EQueryKey } from "../queryKey";
import { useContext } from "react";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import setLocalStorage from "../localstorage/setLocalStorage";
import ELocalStorage from "../../util/enums/localStorage";
import { ERoute } from "../../util/enums/routes";
import showErrorNotification from "../../screens/components/ant-design/notifications/showErrorNotification";
import { API_BASE_URL } from "../baseApiUrl";

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
      await axios.post(`${API_BASE_URL}/api/v1/login`, obj, {
        headers: { Authorization: undefined },
      }),
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET] });

      setUser(data?.data?.content);
      setLocalStorage(ELocalStorage.USER, data?.data?.content);
      navigate(ERoute.ROOT);
    },

    onError: (error: any) => {
      showErrorNotification({ description: error?.response?.data?.message });
    },
  });
};

export default useLogin;
