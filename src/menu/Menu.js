import { Link, NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const activeStyle = {
    backgroundColor: '#aa53d9',
    color: 'white'
  }
  
  return (
      <>
        <div className='top'><Link to="/doit">DO IT</Link>
          <ul className='menuList'>
            <li className='menu'><NavLink activeStyle={activeStyle} to="/doit/lec">수강신청</NavLink></li>
            <li className='menu'><NavLink activeStyle={activeStyle} to="/doit/login">로그인</NavLink></li>
            <li className='menu'><NavLink activeStyle={activeStyle} to="/doit/board">게시판</NavLink></li>
            <li className='menu'><NavLink activeStyle={activeStyle} to="/doit/mypage">마이페이지</NavLink></li>
          </ul>
        </div>
      </>
  );
}

export default Menu;
