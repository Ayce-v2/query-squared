import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PlayerInfo } from './components/player-info';


const queryClient = new QueryClient();


function App() {
  return <>
  <QueryClientProvider client={queryClient}>

  <PlayerInfo/>

  </QueryClientProvider>
  </>
}

export default App;
