import * as React from 'react';
import { useRecoilState } from 'recoil';
import { Helmet } from 'react-helmet-async';
import { ConfigState } from './states/ConfigState';
import { HistoryContext } from '.';
import { Route, Router } from 'react-router-dom';
import { AlertBar } from './components/AlertBar';
import { Navigation } from './components/Navigation';
import { CodeOfConduct } from './pages/CodeOfConduct';
import { Home } from './pages/Home';
import { Sponsors } from './pages/Sponsors';
import { Discord } from './pages/Discord';

export interface IMainProps {}

export const Main: React.FunctionComponent<IMainProps> = (props: IMainProps) => {
    const [ config ] = useRecoilState(ConfigState);
    const history = React.useContext(HistoryContext);


    return (
        <>
      <Helmet>
        { config && config.title && <title>{config.title}</title> }
        { config && config.description && <meta name="description" content={config.description || ""} /> }
      </Helmet>

        <div className='w-full'>

        <Navigation/>

        <AlertBar/>

        <Router history={history as any}>
          <Route exact path="/" component={Home}  />
          <Route path="/sponsors" component={Sponsors}  />
          <Route path="/code-of-conduct" component={CodeOfConduct}  />
          <Route path="/discord" component={Discord}  />
          <Route path="/channels/:channel" component={Home}  />
        </Router>
            </div>
        </>
    )

}