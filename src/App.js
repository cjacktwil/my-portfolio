import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import Portfolio from './components/Portfolio';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  return (
    <>
    <Nav
      contactSelected={contactSelected} 
      setContactSelected={setContactSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      >
    </Nav>
    <main> 
     {!contactSelected && !portfolioSelected && !resumeSelected ? (
        <>
        <About></About>
        </>
     ) : (
       <>
       </>
     )}
     {!portfolioSelected && !resumeSelected && !aboutSelected ? (
       <>
       <ContactForm></ContactForm>
       </>
     ) : (
       <>
       </>
     )}
     {!resumeSelected && !aboutSelected && !contactSelected ? (
       <>
       <Project></Project>
       </>
     ) : (
       <>
       </>
     )}
     {!portfolioSelected && !aboutSelected && !contactSelected ? (
       <>
       <Resume></Resume>
       </>
    ) : (
      <>
      </>
      )}
    </main>
<Footer></Footer>
    </>
  )
}

export default App;
