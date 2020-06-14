import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

const store = createStore(reducer);

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
