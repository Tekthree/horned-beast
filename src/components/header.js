import { Container,Navbar } from 'react-bootstrap';

function Header(){

  return(
    <Container fluid className="nav-container">
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Horned Beast</Navbar.Brand>
      </Navbar>
    </Container>

  )
}

export default Header;