import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

// Component imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import SocialsTab from './components/SocialsTab';

function App() {
  const [count, setCount] = useState(0)

  return (
  <Container>
      <NavBar/>
      <Header/>
      <SocialsTab/>
  </Container>
    

  )
}

export default App
