import { Link } from "react-router-dom";

const Login = () => {
    return (
    <>
    <h2>로그인</h2>
    <input type="text" />
    <input type="password" />
    <br/>
    <button>로그인</button>
    <button><Link to="/doit/newUser">회원가입</Link></button>
    </>
    );
};

export default Login;
