import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const People = () => {
    return (
        <React.Fragment>
            <header className="header">
                <h1 className="header-title">친구</h1>
                <div className="header-icons">
                    <span>
                        <i className="fas fa-search fa-lg"></i>
                    </span>
                    <span>
                        <i className="fas fa-cog fa-lg"></i>
                    </span>
                </div>
            </header>
            <main className="people">
                <a href="##">
                <div className="me">
                    <img src="#" alt="본인 이미지" />
                    <div className="me-column">
                        <h4 className="me-name">김광연</h4>
                        <span className="me-textline">
                            <div className="textline_for">CapStone set</div>
                        </span>
                    </div>
                    <div className="user-component"></div>
                </div>
                </a>
                <div className="friends-screen">
                <div className="friends-screen-header">
                    <span>친구</span>
                    <i className="fas fa-chevron-up fa-xs"></i>
                </div>
                <a href="##">
                    <div className="friends">
                        <img src="#" alt="교육 봇 이미지" />
                        <div className="friends-column">
                            <h4 className="friends-name">교육 봇</h4>
                            <span className="friends-textline">
                                <div className="textline_for">**회사 교육 도우미입니다! 많은 질문부탁 드려요!</div>
                            </span>
                        </div>
                    </div>
                </a>
                </div>
            </main>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="tab-bar__btn">
                        <Link to="/People" className="nav-tab--selected">
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
                        <Link to="#" className="nav-tab">
                            <i className="fas fa-ellipsis-h fa-2x"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div id="splash-screen">
                <img src="#" alt="C&C 로고" />
            </div>
            <div id="no-mobile">
                <span>화면이 너무 큽니다.</span>
            </div>
        </React.Fragment>
    );
};

export default People;