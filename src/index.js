import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/store'
import "./scripts/index";
import './i18n/i18n';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals(console.log);
