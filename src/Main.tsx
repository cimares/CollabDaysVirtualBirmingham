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
import { OnDemand} from './pages/OnDemand';
import { Sponsors } from './pages/Sponsors';
import { Discord } from './pages/Discord';
//import { useSessionize } from './hooks/useSessionize';
import { Footer } from './components/Footer';
import { ModalDialog } from './components/ModalDialog';

export interface IMainProps {}

export const Main: React.FunctionComponent<IMainProps> = (props: IMainProps) => {
    const [ config ] = useRecoilState(ConfigState);
    const history = React.useContext(HistoryContext);
    //useSessionize();

    const [ gInitialized, setGoogleInit ] = React.useState(false);

    const loadGoogle = async () => {
      if (!gInitialized && config && config.googleAnalytics && history) {
        const ReactGA: any = await import(/* webpackChunkName: 'react-ga' */ 'react-ga');
      
        ReactGA.initialize(config.googleAnalytics);
        ReactGA.pageview(window.location.pathname);
        setGoogleInit(true);
        
        (history as any).listen((location: any, action: any) => {
          ReactGA.set({ page: location.pathname });
          ReactGA.pageview(location.pathname);
        });
      }
    };
  
    React.useEffect(() => {
      loadGoogle();
      // eslint-disable-next-line
    }, ['', config]);

    return (
        <>
      <Helmet>
        { config && config.title && <title>{config.title}</title> }
        { config && config.description && <meta name="description" content={config.description || ""} /> }
      </Helmet>

        <div className='w-full'>
 <AlertBar/>
        <Navigation/>

       

        <Router history={history as any}>
          <Route exact path="/" component={Home}  />
          <Route path="/sponsors" component={Sponsors}  />
          <Route path="/code-of-conduct" component={CodeOfConduct}  />
          <Route path="/discord" component={Discord}  />
          <Route path="/channels/:channel" component={Home}  />
          <Route path="/ondemand" component={OnDemand} />
        </Router>

        <Footer />

        <ModalDialog />
            </div>
        </>
    )

}