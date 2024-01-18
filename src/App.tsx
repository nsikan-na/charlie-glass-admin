import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routing/routes";
import { Context, useInitialStore } from "./context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ERoute } from "./routing/helpers";
import axios from "axios";

function App() {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        const axiosError = error as any;
        if (axiosError.response.status === 401) {
          return (window.location.href = ERoute.LOGIN);
        }
        if (axiosError.response.status === 404) {
          return (window.location.href = ERoute.ROOT);
        }
      },
    }),
  });
  return (
    <Context.Provider value={useInitialStore()}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={createBrowserRouter(routes)} />
      </QueryClientProvider>
    </Context.Provider>
  );
}

export default App;
