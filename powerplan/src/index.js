import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './scss/main.scss';
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

//extra funkcjonalnośc do interkcji z danymi
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

