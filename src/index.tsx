import React from 'react';
import ReactDOM from 'react-dom';
import './index.tailwind.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import * as history from 'history';
import { CacheService } from '@valo/cache'

const browserHistory = history.createBrowserHistory();
export const HistoryContext = React.createContext<History>(browserHistory as any);
export const CacheContext = React.createContext<CacheService>(new CacheService("EventCache"));

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

