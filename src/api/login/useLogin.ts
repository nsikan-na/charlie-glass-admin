import axios from "axios";

type TLoginInput = {
  username: string;
  password: string;
};

const useLogin = async ({ username, password }: TLoginInput) => {
  // try {
  //   const response = await axios.post(
  //     `http://localhost/api/v1/login`,
  //     {
  //       username,
  //       password,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   return await response.data;
  // } catch (err) {
  //   console.error(err);
  // }
};

export default useLogin;
