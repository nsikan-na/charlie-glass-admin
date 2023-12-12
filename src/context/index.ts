import { createContext } from "react";

export const useInitialStore = () => {
  return {
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

export const Context = createContext({
  companyDetails: {
    name: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
  },
});
