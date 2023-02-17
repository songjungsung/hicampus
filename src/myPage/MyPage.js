import { useEffect, useState } from 'react';
import Calendar from './Calendar.js';
import picture from './test.jpg'
import './MyPage.css';
import axios from 'axios';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const MyPage = () => {

    return (
    <>
        <div className="student cf">
            {/* 사진 출력  
            <div className='image1'><img className= 'image2' src={picture} ></img></div> */}
            <div className='student-info'>
                <h2 style={{marginBottom: '30px'}}>수강생 정보</h2>
                <div className="sutudent-name">
                    <span>수강생 이름</span>
                    <input type="text" />
                </div>
                <div className="sutudent-number">
                    <span>수강생 번호</span>
                    <input type="text" readOnly />
                </div>
                <div className="sutudent-sy">
                    <span>수강 강의</span>
                    <input type="text" readOnly/>
                </div>
                <div className="sutudent-ph">
                    <span>핸드폰 번호</span>
                    <input type="text" />
                </div>
                <button>수정하기</button>
            </div>
        </div>
        <TodoTemplate>
            <TodoHead/>
            <TodoList/>
        </TodoTemplate>
    </>
    );
};

export default MyPage;
