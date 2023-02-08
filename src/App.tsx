import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PlayerInfo } from './components/player-info';
import { PlayerUpdateForm } from './components/player-update-form';


const queryClient = new QueryClient();


function App() {
  return <>
  <QueryClientProvider client={queryClient}>

  <PlayerInfo/>
  <PlayerUpdateForm/>

  </QueryClientProvider>
  </>
}

export default App;
