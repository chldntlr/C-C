import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const Chat = () => {
    return (
        <React.Fragment>
            <header className="header">
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
            <main className="chat">
                <Link to="Chatroom">
                    <div className="chat__section-row">
                        <img src="#" alt="Profile" />
                        <div className="chat__section-column">
                            <h4 className="chat__section-name">교육 봇</h4>
                            <span className="chat__section-textline">
                                <div className="chat__textline_for">
                                요청 하신 자료는 현재 2건 있습니다....
                                </div>
                            </span>
                        </div>
                        <div className="new_chat">
                            <h6 className="time">23:22</h6>
                            <div className="badge">1</div>
                        </div>
                    </div>
                </Link>
                <a href="#">
                    <div className="chat__section-row">
                        <img src="#" alt="Profile" />
                        <div className="chat__section-column">
                            <h4 className="chat__section-name">##</h4>
                            <span className="chat__section-textline">
                                <div className="chat__textline_for">
                                ##
                                </div>
                            </span>
                        </div>
                        <div className="new_chat">
                            <h6 className="time">21:22</h6>
                            <div className="badge">1</div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="chat__section-row">
                        <img src="#" alt="Profile" />
                        <div className="chat__section-column">
                            <h4 className="chat__section-name">**</h4>
                            <span className="chat__section-textline">
                                <div className="chat__textline_for">
                                **
                                </div>
                            </span>
                        </div>
                        <div className="new_chat">
                            <h6 className="time">12:04</h6>
                            <div className="badge">1</div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="chat-plus">
                        <i class="fa-regular fa-plus"></i>
                    </div>
                </a>
            </main>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="tab-bar__btn">
                        <Link to="/People" className="nav-tab">
                            <i className="fas fa-user fa-2x"></i>
                        </Link>
                    </li>
                    <li className="tab-bar__btn">
                        <Link to="/Chat" className="nav-tab--selected">
                            <span className="nav-notification badge">3</span>
                            <i className="fas fa-comment fa-2x"></i>
                        </Link>
                    </li>
                    <li className="tab-bar__btn">
                        <Link to="#" className="nav-tab">
                            <i className="fas fa-ellipsis-h fa-2x"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div id="no-mobile">
                <span>화면이 너무 큽니다.</span>
            </div>
        </React.Fragment>
    );
};

export default Chat;