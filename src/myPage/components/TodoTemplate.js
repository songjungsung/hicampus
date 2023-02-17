import './TodoTemplate.css';

const TodoTemplate = (props) => {
    return (
        <>
            <div className="TodoTemplate">
                <div className="app-title">출석관리</div>
                <div className="content">{props.children}</div>
            </div>
        </>
    );
};

export default TodoTemplate;
