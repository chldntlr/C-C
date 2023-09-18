import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './style.css';

function Registration() {
    const [isTeamSelectDisabled, setIsTeamSelectDisabled] = useState(true);

    const handleCompanyNumberChange = (event) => {
        const companyNumber = event.target.value;
        if (companyNumber !== "") {
            setIsTeamSelectDisabled(false);
        } else {
            setIsTeamSelectDisabled(true);
        }
    };

    return (
        <React.Fragment>
            <div className="R-body">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <Link className="logo" to="Login">
                    <img src="./img/C&Clogo.png" alt="C&C 로고" id="logo" />
                </Link>
                <div className="R-box">
                    <span className="R-borderLine"></span>
                    <form action="Registration" method="post">
                        <h2>Registration</h2>
                        <div className="R-inputBox">
                            <input type="text" required />
                            <span>아이디</span>
                            <i></i>
                        </div>
                        <div className="R-inputBox">
                            <input type="password" required />
                            <span>비밀 번호</span>
                            <i></i>
                        </div>
                        <div className="R-inputBox">
                            <input type="password" required />
                            <span>비밀 번호 확인</span>
                            <i></i>
                        </div>
                        <div className="R-inputBox">
                            <input type="text" required />
                            <span>이름</span>
                            <i></i>
                        </div>
                        <div className="R-inputBox">
                            <input type="text" required />
                            <span>전화 번호</span>
                            <i></i>
                        </div>
                        <div className="R-inputBox">
                            <input type="text" required name="companyNumber" onChange={handleCompanyNumberChange} />
                            <span>회사 부여 번호</span>
                            <i></i>
                        </div>
                        <div className="R-inputBox1">
                            <div className="R-select-box">
                                <select id="team" required disabled={isTeamSelectDisabled}>
                                <option value="">회사 팀</option>
                                <option value="A">A팀</option>
                                <option value="B">B팀</option>
                                <option value="C">C팀</option>
                                </select>
                            </div>
                            <i></i>
                        </div>
                        <Link to="/Login">
                            <button type="button">회원가입</button>
                        </Link>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Registration;