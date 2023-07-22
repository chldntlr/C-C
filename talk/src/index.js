import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from './C&C/login';
import Registration from './C&C/registration';
import People from './C&C/people';
import Chat from './C&C/chat';
import Chatroom from './C&C/chatroom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <script src="https://kit.fontawesome.com/f48f31764d.js" crossorigin="anonymous"></script>
    </Helmet>
    <Chatroom />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
