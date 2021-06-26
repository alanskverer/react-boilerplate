import './App.css';
import Home from './Pages/Home';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import About from './Pages/About';
import Nav from './Components/Nav';
import AnotherPage from './Pages/AnotherPage';
import MaterialUI from './Pages/MaterialUI';
import Todo from './Pages/Todo';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/anotherpage" >
          <AnotherPage />
        </Route>
        <Route path="/materialui" >
          <MaterialUI />
        </Route>
        <Route path="/todo" >
          <Todo />
        </Route>
      </Switch>
    </div>


  );
}

export default withRouter(App);
