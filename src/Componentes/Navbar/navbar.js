import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TypesExample from '../botao/botao';

// img
import Logo from '../../img/glass.svg';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container id='logo'>
        <Navbar.Brand href="" id='logo'> <img src={Logo} id='logo'/> MyDrink</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='logo' >
          <Nav className="me-auto" id='logo'>
            <Nav.Link href="fale" id='logo'>Contatos</Nav.Link>
            <NavDropdown title="Produtos" id="logo">
              <NavDropdown.Item href="#action/3.1" >Whisky</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Red Label
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fanta</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Outros...
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
           
            <Nav.Link eventKey={2} href="Home" className='logo'>
              {/* butao */}
              <TypesExample/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    
  );
}

export default CollapsibleExample;