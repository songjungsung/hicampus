// https://react-icons.github.io/react-icons/icons?name=md
import { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import './TodoInsert.css';

const TodoInsert = ({ insertTodo }) => {


    const [value, setValue] = useState('');
    const handlerChange = e => setValue(e.target.value);
    const handlerSubmit = e => {
        e.prevenDefault();
        insertTodo(value);
        setValue('');
    };

    return (
        <>
        <div className="Attapply" 
                type="text" 
                value={value} 
                onchange={handlerChange}>
            <button className="button" 
                type="submit" 
                style={{color:"snow", fontSize:"16px"}}>
                출석하기
            </button>
                한번만 클릭할 수 있게 하게 하고 싶어요
        </div>

        </>
    );
};

export default TodoInsert;
