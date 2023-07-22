import React from 'react';

import './style.css';

function Login() {
    return (
        <React.Fragment>
            <a className="logo" href="#">
            <img src="#" alt="C&C 로고" id="logo" />
            </a>
            <div className="L-box">
                <span className="L-borderLine"></span>
                <form action="#" method="post">
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
                        <a href="#">회원가입</a>
                    </div>
                    <input type="submit" value="로그인" />
                </form>
            </div>
            <div id="no-mobile">
                <span>화면이 너무 큽니다.</span>
            </div>
        </React.Fragment>
    );
}

export default Login;