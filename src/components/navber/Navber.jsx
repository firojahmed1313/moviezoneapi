import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Header from '../header/Header';
import './nav.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import companyLogo from "../../assets/logomovie.png";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Navber() {
  const { loginWithRedirect , isAuthenticated ,logout} = useAuth0();
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/admin`; 
    navigate(path);
  }
  const result = useSelector((state) => state.cartData);
  return (
    <Navbar expand="lg" className="bg-body-tertiary -mt-2">
      <Container className="imgs">
        <Navbar.Brand href="/"><img src={companyLogo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav" >
            <NavLink  to="/"><button className='navlinkstyle' >Home</button> </NavLink>
            <NavLink  to="/cart"><button className='navlinkstyle' >PlayList<button className='choto' >{result.length}</button></button></NavLink>
            <Header/>
          </Nav>
          {isAuthenticated ?<Button variant="contained" color="success" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>logout</Button> : <Button variant="contained" color="success" onClick={() => loginWithRedirect()}>User LogIn</Button>  }
          {isAuthenticated ?<Button onClick={routeChange} variant="contained" color="success" width= "fitContent" disabled>Admin</Button> : <Button onClick={routeChange} variant="contained" color="success" width= "fitContent">Admin LogIn</Button> }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navber;