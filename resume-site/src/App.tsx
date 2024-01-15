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
import Portfolio from './components/Portfolio';

function App() {

  return (
  <div>
      <NavBar/>
      <Header/>
      <SocialsTab/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
  </div>
    

  )
}

export default App
