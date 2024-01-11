import axios from "axios";
import { EBaseUrl } from "../baseUrl";
import { useMutation } from "@tanstack/react-query";

type TLoginInput = {
  username: string;
  password: string;
};

const useLogin = () => {
  return useMutation({
    mutationFn: async (obj: TLoginInput) =>
      await axios.post(`${EBaseUrl.CGI_API}/api/v1/login`, obj),
  });
};

export default useLogin;
