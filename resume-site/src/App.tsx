import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

// Component imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import SocialsTab from './components/SocialsTab';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
  <Container>
      <NavBar/>
      <Header/>
      <SocialsTab/>
      <About/>
      <Footer/>
  </Container>
    

  )
}

export default App
