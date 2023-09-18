import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from './C&C/login';
import Registration from './C&C/registration';
import People from './C&C/people';
import Chat from './C&C/chat';
import Chatroom from './C&C/chatroom';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script src="https://kit.fontawesome.com/f48f31764d.js" crossorigin="anonymous"></script>
    </Helmet>
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/People" element={<People />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Chatroom" element={<Chatroom />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
