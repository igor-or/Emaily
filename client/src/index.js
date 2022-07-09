import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//TODO delete(test) ************************************
import axios from 'axios';
window.axios = axios;
// const survey = {title: 'My Title', subject: 'subject', recipients: 'ua.electrolux.official@gmail.com, ua.zanussi.official@gmail.com', body: 'heres the body of email'}
// axios.post('/api/surveys', survey)
//******************************************

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
