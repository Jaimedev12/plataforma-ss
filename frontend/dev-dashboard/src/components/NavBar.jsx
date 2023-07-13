// NavBar.js
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
 return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link> 
                    <Link to="/"> Home </Link> 
                </Nav.Link>
                <Nav.Link> 
                    <Link to="/function-tester"> Function Tester </Link> 
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
 );

};

export default NavBar;