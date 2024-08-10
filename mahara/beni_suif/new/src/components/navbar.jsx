import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeLanguage } from '../store/actions/Action_lang';
import { changeTheme } from '../store/actions/Action_them';

function BasicExample() {
  const MyLang = useSelector((state) => state.myLang.lang);
  const  Theme = useSelector((state) => state.myTheme.theme);

  const dispatch = useDispatch();

  const handleLangChange = () => {
    console.log("clicked");

    dispatch(changeLanguage(MyLang === "EN" ? "AR" : "EN"));
  };

  const handleThemeChange = () => {
    console.log("clicked");
    dispatch(changeTheme(Theme === "light" ? "dark" : "light")); // Ensure consistent case
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ADDUser">AddUser</Nav.Link>
            <Nav.Link as={Link} to="/FunAppComp">Function</Nav.Link>
            <Nav.Link as={Link} to="/Companies">Companies</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link onClick={handleLangChange}>{MyLang}</Nav.Link>
            <Nav.Link  onClick={handleThemeChange}>{Theme}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
