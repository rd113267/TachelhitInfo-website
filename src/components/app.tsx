import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import baseroute from '../baseroute';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
          <ThemeProvider theme={theme}>
            <Header />
            {(baseroute || process.env.NODE_ENV === 'development') ? <Router>
                <Route path={`${baseroute}/`} component={Home} />
                <Route path={`${baseroute}/link1`} component={Profile} />
                <Route path={`${baseroute}/link2`} component={Profile} />
                <NotFoundPage default />
            </Router> : <CircularProgress />}

            </ThemeProvider>
        </div>
    );
};

export default App;
