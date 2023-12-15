import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routing/routes";
import { Context, useInitialStore } from "./context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <Context.Provider value={useInitialStore()}>
      <QueryClientProvider client={new QueryClient()}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={createBrowserRouter(routes)} />
      </QueryClientProvider>
    </Context.Provider>
  );
}

export default App;
