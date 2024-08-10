import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunAppComp from './components/funAppComp';
import AddUser from './components/AddUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';
import NavBar from './components/navbar';
import Companies from './pages/companies/companies';
import ComDetailes from './pages/comp_det/comp_det';
import Blogs from './pages/blogs/blogs';
import { useSelector } from 'react-redux';

function App() {
  const MyTheme = useSelector((state) => state.myTheme.theme);
  const checkRedux = useSelector((state) => state.myLang.lang);

  return (
    <BrowserRouter>
      <div className={MyTheme === "light" ? "text-dark bg-light" : "text-light bg-dark"}>
        <div dir={checkRedux === "EN" ? "ltr" : "rtl"}>
          <NavBar /> 
          <Routes>
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/FunAppComp" element={<FunAppComp />} />
            <Route path="/" element={<Home />} />
            <Route path="/Companies" element={<Companies />} />
            <Route path="/detailes/:id" element={<ComDetailes />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
