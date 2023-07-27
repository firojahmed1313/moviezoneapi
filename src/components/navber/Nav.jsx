import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import companyLogo from "../../assets/logomovie.png";
import { NavLink } from 'react-router-dom';

function Navber() {
  const { logout  } = useAuth0();

  return (
    <Navbar expand="lg" className="bg-body-tertiary -mt-2">
      <Container className="imgs">
        <Navbar.Brand href="/"><img src={companyLogo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar" >
            <NavLink className="navlinkstyle" to="/">Home </NavLink>
            <NavLink className="navlinkstyle" to="/cart">PlayList</NavLink>
            
            
          </Nav>
        </Navbar.Collapse>
        <Button variant="contained" color="success" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>logout</Button>

      </Container>
    </Navbar>
  );
}

export default Navber;