import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const More = () => {
    return (
        <React.Fragment>
            <div className="M-body">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <header className="header">
                    <h1 className="header-title">
                        더보기
                    </h1>
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
                <main>

                </main>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="tab-bar__btn">
                            <Link to="/" className="nav-tab">
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
                            <Link to="/More" className="nav-tab--selected">
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

export default More;