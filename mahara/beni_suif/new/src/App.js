import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunAppComp from './components/funAppComp'
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';
import NavBar from './components/navbar';
import Companies from './pages/companies/companies';
import ComDetailes from'./pages/comp_det/comp_det';
import Blogs from './pages/blogs/blogs';
function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route path="/AddUser" component={AddUser} exact>
      </Route>
      <Route path="/FunAppComp" component={FunAppComp} exact>
      </Route>
      <Route path="/" component={Home} exact></Route>
      <Route path="/Companies" component={Companies} exact></Route>
      <Route path="/detailes/:id" component={ComDetailes}></Route>
      <Route path="/blogs" component={Blogs} exact></Route>
      <Route path="*" component={NotFound} exact></Route>
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
