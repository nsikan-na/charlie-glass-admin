import axios from "axios";

type TLoginInput = {
  username: string;
  password: string;
};

const useLogin = async ({ username, password }: TLoginInput) => {};

export default useLogin;
