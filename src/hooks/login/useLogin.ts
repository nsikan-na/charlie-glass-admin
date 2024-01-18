import axios from "axios";
import { EBaseUrl } from "../baseUrl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EQueryKey } from "../queryKey";
import { useContext } from "react";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../../routing/helpers";
import setLocalStorage from "../localstorage/setLocalStorage";

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
      await axios.post(`${EBaseUrl.CGI_API}/api/v1/login`, obj),
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: [EQueryKey.GET_ALL_INVOICES] });

      setUser(data?.data);
      setLocalStorage(ELocalStorage.USER, data?.data);
      navigate(ERoute.ROOT);
    },
  });
};

export default useLogin;
