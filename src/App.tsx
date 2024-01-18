import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routing/routes";
import { Context, useInitialStore } from "./context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        console.log(error);
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
