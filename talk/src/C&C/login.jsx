import React from 'react';

import { Link } from 'react-router-dom';

import './L&R.css';

function Login() {
    return (
        <React.Fragment>
            <Link className="logo" to="">
            <img src="C&Clogo.png" alt="C&C 로고" id="logo" />
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
                        <Link to="Registration">회원가입</Link>
                    </div>
                    <button type="button" onClick="/People">로그인</button>
                </form>
            </div>
            <div id="no-mobile">
                <span>화면이 너무 큽니다.</span>
            </div>
        </React.Fragment>
    );
}

export default Login;