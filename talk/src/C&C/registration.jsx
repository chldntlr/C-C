import React, { useState } from 'react';

import './L&R.css';

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
            <div>
                <a className="logo" href="#">
                    <img src="#" alt="C&C 로고" id="logo" />
                </a>
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
                        <button type="button" onClick="/Login">회원가입</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Registration;