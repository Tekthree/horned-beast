import { Container,Navbar } from 'react-bootstrap';

function Header(){

  return(
    <Container fluid>
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Horned Beast</Navbar.Brand>
      </Navbar>
    </Container>

  )
}

export default Header;