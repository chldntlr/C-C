import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.css';
import Logo from './img/C&Clogo.png';

const Chat = () => {

    const currentChatRoom = useSelector(state => state.chatRoom.currentChatRoom)

    return (
        <React.Fragment>
            <div className="C-body">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <header className="header">
                    <h1 className="header-title">채팅</h1>
                    <div className="header-icons">
                        <span>
                            <Link to="#" className="custom-link">
                                <i className="fas fa-search fa-lg"></i>
                            </Link>
                        </span>
                        <span>
                            <Link to="/Set" className="custom-link">
                                <i className="fas fa-cog fa-lg"></i>
                            </Link>
                        </span>
                    </div>
                </header>
                <main className="chat">
                    <Link to="/Chatroom">
                        <div className="chat__section-row">
                            <img src={Logo} alt="Profile" />
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
                            <img src={Logo} alt="Profile" />
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
                            <img src={Logo} alt="Profile" />
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
                    <Link to="/Chatplus">
                        <div className="chat-plus">
                            <i class="fa fa-plus fa-2x"></i>
                        </div>
                    </Link>
                </main>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="tab-bar__btn">
                            <Link to="/" className="nav-tab">
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
                            <Link to="/More" className="nav-tab">
                                <i className="fas fa-ellipsis-h fa-2x"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div id="no-mobile">
                    <span>화면이 너무 큽니다.</span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Chat;