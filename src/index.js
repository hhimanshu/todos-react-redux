import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createStore} from 'redux'
import reducer from './reducers';
import App from "./App";


const store = createStore(reducer);
const muiTheme = getMuiTheme({
    appBar: {
        color: '#37517E',
        height: 50
    },
});

injectTapEventPlugin();

const customHistory = createBrowserHistory();
const Root = () => (
    <MuiThemeProvider muiTheme={muiTheme} store={store}>
        <Router history={customHistory}>
            <div>
                <Route path={'/'} component={App}/>
            </div>
        </Router>
    </MuiThemeProvider>
);


ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
