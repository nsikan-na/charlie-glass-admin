import {
  QueryClient,
  QueryClientProvider,
  QueryCache
} from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routing/routes';
import { Context, useInitialStore } from './context';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ERoute } from './util/enums/routes';
import { ConfigProvider } from 'antd';
import { EColors } from './util/enums/colors';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity
      }
    },
    queryCache: new QueryCache({
      onError: (error) => {
        const axiosError = error as any;
        if (axiosError.response.status === 401) {
          return (window.location.href = ERoute.LOGIN);
        }
      }
    })
  });
  return (
    <Context.Provider value={useInitialStore()}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ConfigProvider theme={theme}>
          <RouterProvider router={createBrowserRouter(routes)} />
        </ConfigProvider>
      </QueryClientProvider>
    </Context.Provider>
  );
}

export default App;

const theme = {
  token: {
    colorPrimary: EColors.primary
  }
};
