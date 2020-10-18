import React from 'react';

function Nav(props) {
const {
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected,
    aboutSelected,
    setAboutSelected
} = props;
    return (
        <header>
            <h1>Tracey Jackson</h1>
               <ul>
          <li>
              <a href="#about" onClick={() => {
                  setContactSelected(false); 
                  setPortfolioSelected(false); 
                  setResumeSelected(false);
                  setAboutSelected(true)
              }
              }>About Me</a>
              </li>
          <li>
              <a href='#portfolio' onClick={() => 
            {
                setContactSelected(false); 
                setPortfolioSelected(true); 
                setResumeSelected(false);
                setAboutSelected(false)
            }}>Portfolio</a>
              </li>
          <li>
              <a href='#contact' onClick={() => 
                {
                    setContactSelected(true); 
                    setPortfolioSelected(false); 
                    setResumeSelected(false);
                    setAboutSelected(false)
                }}>Contact</a>
              </li>
          <li>
              <a href='#resume' onClick={() => 
            {
                setContactSelected(false); 
                setPortfolioSelected(false); 
                setResumeSelected(true);
                setAboutSelected(false)
            }}>Resume</a>
              </li>
        </ul>
        </header>
    );
}

export default Nav;