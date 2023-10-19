import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

// Component imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import SocialsTab from './components/SocialsTab';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
  <div>
      <NavBar/>
      <Header/>
      <SocialsTab/>
      <About/>
      <Contact/>
      <Footer/>
  </div>
    

  )
}

export default App
