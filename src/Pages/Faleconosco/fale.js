import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import BasicExample from '../../Componentes/form/form';


// img
import Logo from '../../img/glass.svg'
function BrandExample() {
  return (
    <>
      <Navbar bg="dark">
        <Container id='logo'> 
          <Navbar.Brand as={Link} to="#home" id='logo'>
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              id='logo'
              
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <div className='centralizar'>
        <BasicExample/>
      

      </div>

      
      
    </>
  );
}

export default BrandExample;