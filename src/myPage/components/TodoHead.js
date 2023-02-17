
import React from 'react';
import './TodoHead.css';


function TodoHead() {

    const todayTime = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        return year + '년' + month + '월' + date + '일';
    };
    // const undoneTasks = todos.filter(todo => todo.done);


    // const date = moment(date).format('YYYY년 MM월 DD일');

    return (
        <div className="user">
            <h2 className="ymd" >{todayTime()}<br/>
                                수강번호 xx 
                                000님 안녕하세요
            </h2><br/>
            <div className="day">총 출석일 수 : </div>
            <div className="tasks-left">지원대상금 : </div>
            <button className="ymdbutton">출석하기</button>
        </div>
    );
}

export default TodoHead;