import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './scss/main.scss';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebaseConfig from './config/firebaseConfig';


//extra funkcjonalnośc do interkcji z danymi
const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        //reduxFirestore(firebaseConfig),
       //reactReduxFirebase(firebaseConfig)
    )
);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')
);

