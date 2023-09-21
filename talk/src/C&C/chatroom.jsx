import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';
import Logo from './img/C&Clogo.png';

const Chatroom = () => {
    return(
        <React.Fragment>
            <div className="CR-body">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <header className="header">
                    <span className="wrapper">
                        <Link to="/Chat" className="back-link">
                            <i className="fa fa-chevron-left fa-2x"></i>
                        </Link>
                    </span>
                    <h1 className="header-title">채팅</h1>
                    <div className="header-icons">
                        <span>
                            <i className="fas fa-search fa-lg"></i>
                        </span>
                        <span>
                            <i className="fas fa-cog fa-lg"></i>
                        </span>
                    </div>
                </header>
                <main className="chats">
                    <ul className="chats__list">
                        <li className="chats_chat">
                            <div className="chats__content">
                                <div>
                                    <form>
                                        <img src={Logo} />
                                    </form>
                                </div>
                                <div className="chat__priview">
                                    <h3 className="chat__user">
                                        사자
                                    </h3>
                                    <span className="chat-last-message">
                                        Hi
                                    </span>
                                </div>
                            </div>
                            <span className="chat__date-time">
                                08:55
                            </span>
                        </li>
                    </ul>
                    <ul className="chats__list">
                        <li className="chats_chat">
                            <div className="chats__content">
                                <div className="box">
                                    <span className="borderLine"></span>
                                    <form>
                                        <img src={Logo} />
                                    </form>
                                </div>
                                <div className="chat__priview">
                                    <h3 className="chat__user">
                                        호랑이
                                    </h3>
                                    <span className="chat-last-message">
                                        Bye
                                    </span>
                                </div>
                            </div>
                            <span className="chat__date-time">
                                05:45
                            </span>
                        </li>
                    </ul>
                </main>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="tab-bar__btn">
                            <a href="#" className="nav-tab">
                                <i className="fas fa-user fa-2x"></i>
                            </a>
                        </li>
                        <li className="tab-bar__list">
                            <a href="#" className="nav-tab--selected">
                                <span className="nav-notification badge">3</span>
                                <i className="fas fa-comment fa-2x"></i>
                            </a>
                        </li>
                        <li className="tab-bar__list">
                            <a href="#" className="nav-tab">
                                <i className="fas fa-ellipsis-h fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div id="no-mobile">
                    <span>화면이 너무 큽니다.</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Chatroom;