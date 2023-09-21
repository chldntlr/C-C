import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const Set = () => {
    return (
        <React.Fragment>
            <div className="S-body">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <header className="header">
                    <h1 className="header-title">
                        설정
                    </h1>
                    <div className="header-icons">
                        <span>
                            <i className="fas fa-search fa-lg"></i>
                        </span>
                        <span>
                            <i className="fas fa-cog fa-lg"></i>
                        </span>
                    </div>
                </header>
                <main>
                    <div>
                        <div>
                            알림설정
                        </div>
                        <div>
                            <select id="notification" onchange="toggleNotification()">
                                <option value="on">알림 켜짐</option>
                                <option value="off">알림 꺼짐</option>
                            </select>
                        </div>
                    </div>
                </main>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="tab-bar__btn">
                            <Link to="/People" className="nav-tab">
                                <i className="fas fa-user fa-2x"></i>
                            </Link>
                        </li>
                        <li className="tab-bar__btn">
                            <Link to="/Chat" className="nav-tab">
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

export default Set;