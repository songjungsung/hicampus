import React from 'react';
import './TodoItem.css';
import { MdDone } from 'react-icons/md'


const TodoListItem = ({ id, done, text }) => {

    return (
      <div className="TodoItemBlock">
        <div className="CheckCircle" done={done}>{done && <MdDone />}</div>
        <div className="Text" done={done}>{text}</div>
      </div>
    );
};

export default TodoListItem;

