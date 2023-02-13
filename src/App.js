import { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import Board from './Board';
import Bottom from './bottom/Bottom';
import Course from './Course';
import Login from './LogIn';
import Main from './main/Main';
import Menu from './menu/Menu';
import MyPage from './MyPage';
import './App.css';

function App() {
  return (
   <>
    <header>
      <Menu />
    </header>
    
    <section>
      <Route path="/course" component={Course} />
      <Route path="/login" component={Login} />
      <Route path="/board" component={Board} />
      <Route path="/myPage" component={MyPage} />
      <Route path="/main" component={Main} />
    </section>
    
    <footer>
      <Bottom />
    </footer>
   </>
  );
}

export default App;
