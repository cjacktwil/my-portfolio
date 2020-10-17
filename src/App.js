import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <Nav></Nav>
    <main> 
      <About></About>
      <Portfolio></Portfolio>
    </main>
<Footer></Footer>
    </>
  )
}

export default App;
