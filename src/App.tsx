import React from 'react';
import { Spinner } from './components/Spinner'
import { useRecoilState } from 'recoil';
import { ConfigState } from './states/ConfigState';
import { useConfig } from './hooks/useConfig';
import { Main } from './Main';

function App() {

const [ config ] = useRecoilState(ConfigState);
useConfig();

if (config) {
  return <Main/>;
}

return <Spinner/>;


}

export default App;
