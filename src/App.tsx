import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routing/routes";
import { Context } from "./context";
import { useGetInitialContext } from "./context/useGetInitialContext";

const queryClient = new QueryClient();

const router = createBrowserRouter(routes);

function App() {
  const initialContext = useGetInitialContext();
  return (
    <Context.Provider value={initialContext}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Context.Provider>
  );
}

export default App;
