import { createContext } from "react";

export const useInitialStore = () => {
  return {
    user: {
      id: 6,
    },
    companyDetails: {
      name: "Charlie Glass Inc",
      phoneNumber: "(917)-848-9128",
      street: "330 7th Ave Unit B3",
      city: "New York",
      state: "New York",
      zip: "11220",
      email: "info@charlieglassinc.com",
    },
  };
};

export const Context = createContext<TContextProps>({
  user: null,
  companyDetails: null,
});

type TContextProps = {
  companyDetails: {
    name: string;
    phoneNumber: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    email: string;
  } | null;
  user: {
    id: number;
  } | null;
};
