import { createContext, useState } from "react";

export const useInitialStore = () => {
  const [user, setUser] = useState<any>(userInitalState);

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

export const userInitalState = {
//Remove this
  userId: 1,
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
  user: userInitalState,
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
