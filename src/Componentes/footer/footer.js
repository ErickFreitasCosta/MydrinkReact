import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
     
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className='logo'>
          <Navbar.Brand href="#home" id='footer' className='logo'>
            My drink Ⓒ 2023 - Todos os direitos reservados
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;