import { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import Board from './board/Board';
import Bottom from './bottom/Bottom';
import Login from './login/LogIn';
import Main from './main/Main';
import Menu from './menu/Menu';
import MyPage from './myPage/MyPage';
import './App.css';
import Lecture from './lecture/Lecture';
import AdminPage from './myPage/AdminPage';

function App() {
  return (
   <>
    <header>
      <Menu />
    </header>
    
    <section>
      <Route path="/lecture" component={Lecture} />
      <Route path="/login" component={Login} />
      <Route path="/board" component={Board} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/doit" component={Main} />
      <Route path="/adminpage" component={AdminPage} />
    </section>
    
    <footer>
      <Bottom />
    </footer>
   </>
  );
}

export default App;
