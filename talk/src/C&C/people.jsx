import React from 'react';
import { Helmet } from 'react-helmet';

import './style.css';

const People = () => {
    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f48f31764d.js" crossorigin="anonymous"></script>
            </Helmet>

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
                    <div className="user-component__column"></div>
                </div>
                </a>
                <div className="friends-screen__channel">
                <div className="friends-screen__channel-header">
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
                <ul className="tab-bar__list">
                    <li className="tab-bar__btn">
                        <a href="#" className="tab-bar__tab--selected">
                            <i className="fas fa-user fa-2x"></i>
                        </a>
                    </li>
                    <li className="tab-bar__list">
                        <a href="#" className="tab-bar__tab">
                            <span className="tab-bar__notification badge">3</span>
                            <i className="fas fa-comment fa-2x"></i>
                        </a>
                    </li>
                    <li className="tab-bar__list">
                        <a href="#" className="tab-bar__tab">
                            <i className="fas fa-ellipsis-h fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="splash-screen">
                <img src="#" alt="C&C 로고" />
            </div>
            <div id="no-mobile">
                <span>화면이 너무 큽니다.</span>
            </div>
        </>
    );
};

export default People;