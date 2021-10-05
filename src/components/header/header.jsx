import { Container, Nav, Navbar } from 'react-bootstrap';
import './header.css';
<header className="css"></header>
function Header() {
    return(
        <div>
            <Navbar bg='primary'>
                <Container>
                    <Navbar.Brand href="/">The SKRRT Library</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/books'>Books</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="/logout">Mark Otto</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;