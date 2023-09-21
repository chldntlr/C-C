import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';
import Logo from './img/C&Clogo.png';

function Login() {
    return (
        <React.Fragment>
            <div className="L-body">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <Link className="logo" to="/Login">
                    <img src={Logo} alt="Logo" id="logo" />
                </Link>
                <div className="L-box">
                    <span className="L-borderLine"></span>
                    <form action="Login" method="post">
                        <h2>Login</h2>
                        <div className="L-inputBox">
                            <input type="text" required="required" />
                            <span>아이디</span>
                            <i></i>
                        </div>
                        <div className="L-inputBox">
                            <input type="password" required="required" />
                            <span>비밀번호</span>
                            <i></i>
                        </div>
                        <div className="L-links">
                            <a href="#">아이디/비밀번호 찾기</a>
                            <Link to="/Registration">회원가입</Link>
                        </div>
                        <Link to="/People">
                            <button type="button">로그인</button>
                        </Link>
                    </form>
                </div>
                <div id="no-mobile">
                    <span>화면이 너무 큽니다.</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;