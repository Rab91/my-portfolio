import {Navbar as NavbarBs, Container,Nav, ListGroup} from 'react-bootstrap'
import {NavLink} from "react-router-dom"

export function Navbar(){
    return <NavbarBs>
    <Container>
     <Nav className="me-auto">
        <Nav.Link to="/ " as={NavLink}>Home</Nav.Link>
        <Nav.Link to="/about " as={NavLink}>About</Nav.Link>
        <Nav.Link to="/profile " as={NavLink}>Skills</Nav.Link>
        <Nav.Link to="/experience" as={NavLink}>Experience</Nav.Link>
        <Nav.Link to="/qualifications" as={NavLink}>Education</Nav.Link>
        <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link>
     </Nav>
    </Container>
    </NavbarBs>
}
   