import logo from './logo.svg';
import './App.css';
// css botstrap
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Home from './Pages/Home/home';
import Fale from './Pages/Faleconosco/fale';

import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';



function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/fale" element={<Fale/>}/>
          
        </Routes>
      </Router>
     
    
  );
}

export default App;
