import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SelectBasicExample from './form2';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    
    <Form>

<div id='input-fale'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome :</Form.Label>
            <Form.Control type="text" placeholder="Coloque seu nome" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control type="email" placeholder="Coloque seu Email email" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha :</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </div>
        <div id='mae'>
            
            <SelectBasicExample/>
            
        </div>
      <div id='centralizar-btn'>
           
                <div id='btn-fale'>
          
             <Link rel="stylesheet" href="" to={'/'}>
                 <Button variant="primary" type="submit">
                   Enviar
                 </Button>
             </Link>
                </div>
              <div>
                    
                               <Button variant="primary" type="submit">
                                 Cancelar
                               </Button>
              </div>
      </div>
    </Form>
  );
}

export default BasicExample;