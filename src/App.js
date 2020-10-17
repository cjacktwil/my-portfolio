import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Nav></Nav>
    <main> 
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </main>
<Footer></Footer>
    </>
  )
}

export default App;
