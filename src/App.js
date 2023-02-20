import { Route } from 'react-router-dom';
import Board from './board/Board';
import Bottom from './bottom/Bottom';
import Login from './login/LogIn';
import Main from './main/Main';
import Menu from './menu/Menu';
import MyPage from './myPage/MyPage';
import './App.css';
import Lecture from './lecture/Lecture';
import Regist from './regist/Regist';
import AdminPage from './adminPage/AdminPage';

function App() {
  return (
    <>
      <header>
        <Menu />
      </header>
    
      <section >
        <Route path="/doit" component={Main} exact={true} />
        <Route path="/doit/lec" component={Lecture} />
        <Route path="/doit/login" component={Login} />
        <Route path="/doit/regist" component={Regist} />
        <Route path="/doit/board" component={Board} />
        <Route path="/doit/mypage" component={MyPage} />
        <Route path="/doit/adminpage" component={AdminPage} />
      </section>
      

      <footer>
        <Bottom />
      </footer>      
    </>
  );
}

export default App;
