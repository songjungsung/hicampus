import axios from "axios";
import { useState } from "react";
import "./Regist.css";

const Regist = ({history}) => {
// 상태변수
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [birth, setBirth] = useState('');
// 이벤트 핸들러
    const handlerUserName = e => setUserName(e.target.value);
    const handlerChangeUserId = e => setUserId(e.target.value);
    const handlerChangeUserPassword = e => setUserPassword(e.target.value);
    const handlerEmail = e => setEmail(e.target.value);
    const handlerContact = e => setContact(e.target.value);
    const handlerBirth = e => setBirth(e.target.value);
// 서버 전달
    const handlerOnSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/doit/regist', { userName, userId, userPassword, email, contact, birth })
            .then(response => {
                console.log(response);
                if(response.data === "정상처리") {
                alert("회원가입이 완료되었습니다.")
                history.push("/doit/login");
            }})
            .catch(error => {
                console.log(error)
                alert("정보입력이 잘못되었습니다.");
                return;
            });
    };

  
    return (
        <>
        <form id="frm" name="frm" onSubmit={handlerOnSubmit}>
        <div className="sutudent cf">
            <div className='student-info'>
                <h2 style={{marginBottom: '30px'}}>수강생 정보</h2>
                <div className="student-name">
                    <span className="span-name">이름</span>
                    <input type="text"  value={userName} onChange={handlerUserName}/>
                </div>
                <div className="student-number">
                    <span className="span-id">아이디</span>
                    <input type="text" value={userId} onChange={handlerChangeUserId} />
                </div>
                <div className="student-sy">
                    <span className="span-pw">패스워드</span>
                    <input type="text"  value={userPassword} onChange={handlerChangeUserPassword} />
                </div>
                <div className="student-sy">
                    <span className="span-email">이메일</span>
                    <input type="text"  value={email} onChange={handlerEmail} />
                </div>
                <div className="student-sy">
                    <span className="span-sy">연락처</span>
                    <input type="text"  value={contact} onChange={handlerContact} />
                </div>
                <div className="student-ph">
                    <span className="span-ph">생년월일</span>
                    <input type="text" style={{marginBottom: '20px'}}  value={birth} onChange={handlerBirth} placeholder="주민등록번호 앞6자리를 입력해주세요." />
                </div>
                <input type="submit" id="submit" value="가입하기" className="btn" />
            </div>
        </div>
        </form>
        </>
    );
};

export default Regist;