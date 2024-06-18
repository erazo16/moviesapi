
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './home';


function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider  client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
