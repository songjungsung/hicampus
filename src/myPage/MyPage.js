import { useEffect, useState } from 'react';
import Calendar from './Calendar.js';
import picture from './test.jpg'
import './MyPage.css';
import axios from 'axios';

const MyPage = ({studentIdx}) => {
    const [student, setStudent] = useState({});    
    
    useEffect(() => {
        axios.get(`http://localhost:8080/doit/mypage/${studentIdx}`)
             .then(response => {
                console.log(response);
                setStudent(response.data);
             })
             .catch(error => console.log(error));
    }, {});

    return (
    <>
        <div>
            <img className= 'image1' src={picture} ></img>
            수강생 이름<input type='text' value={student.studentName} /><br/>
            수강생 번호<input type='text' value={student.studentIdx} /><br/>
            수강 강의<input type='text' value={student.studentLecture}/><br/>
            핸드폰 번호<input type='text' value={student.studentContact}/>
        </div>
        <button>출석하기</button>
        <div>   
            <Calendar />
                총 출석일<input type='text' /><br/>
                총 결석일<input type='text' /><br/>
                훈련 장려금<input type='text' />  
        </div>
    </>
    );
};

export default MyPage;
