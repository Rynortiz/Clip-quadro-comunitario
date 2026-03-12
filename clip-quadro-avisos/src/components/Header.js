import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Header.css';

function Header() {
    return(
        <Navbar bg="dark" expand="lg" sticky="top" className="navbar-custom">
            <Container>
                <Navbar.Brand href="#" className="brand-logo">
                    <span className="logo-icon">📌</span>
                    CLIP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link href="#" className="nav-link-custom">Sobre</Nav.Link>
                        <Nav.Link href="#" className="nav-link-custom">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;