import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './scss/main.scss';
import AuthProvider from "./config/context";


ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
);

