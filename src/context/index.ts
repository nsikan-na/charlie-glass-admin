import { createContext, useEffect, useState } from "react";
import getLocalStorage from "../hooks/localstorage/getLocalStorage";
import axios from "axios";
import ELocalStorage from "../util/enums/localStorage";

export const useInitialStore = () => {
  const [user, setUser] = useState<any>(
    getLocalStorage(ELocalStorage.USER) || userInitialState
  );

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + user?.accessToken;
  }, [user]);

  return {
    user,
    setUser,
    companyDetails: {
      name: "Charlie Glass Inc",
      phoneNumber: "(917)-848-9128",
      street: "326 50th st",
      city: "Brooklyn",
      state: "New York",
      zip: "11220",
      email: "info@charlieglassinc.com",
    },
  };
};

export const userInitialState = {
  //Remove this
  userId: null,
  userName: null,
  expirationMs: null,
  accessToken: null,
};

export const Context = createContext<TContextProps>({
  companyDetails: {
    name: null,
    phoneNumber: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    email: null,
  },
  user: userInitialState,
});

type TContextProps = {
  companyDetails: {
    name: string | null;
    phoneNumber: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    email: string | null;
  };
  user: {
    userId: number | null;
    userName: string | null;
    expirationMs: string | null;
    accessToken: string | null;
  };
};
