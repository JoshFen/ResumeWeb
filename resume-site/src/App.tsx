import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

// Component imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import SocialsTab from './components/SocialsTab';
import DividerOne from './components/DividerOne';
import DividerTwo from './components/DividerTwo';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Photos from './components/Personal';

function App() {

  return (
  <div>
      {/*<NavBar/>*/}

      <SocialsTab/>
      <DividerTwo/>
      <About/>
      <Photos/>
      <DividerOne/>
      <Portfolio/>
      <DividerTwo/>
      <Contact/>
      <Footer/>
  </div>
    

  )
}

export default App
