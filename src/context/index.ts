import { createContext } from "react";

export const useInitialStore = () => {
  return {
    user: {
      id: 6,
    },
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
  user: {
    id: null,
  },
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
    id: number | null;
  };
};
