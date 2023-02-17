import './TodoList.css';
import TodoItem from './TodoItem';


const TodoList = () => {
    return (
        <div className="TodoList">
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
        </div>
    );
};

export default TodoList;
