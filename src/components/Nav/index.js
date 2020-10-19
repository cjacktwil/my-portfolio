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
               <ul className={`float-right nav justify-content-end`}>
          <li className={`mx-2 nav-item ${aboutSelected && 'nav-link active'}`}>
              <h4><a href="#about" onClick={() => {
                  setContactSelected(false); 
                  setPortfolioSelected(false); 
                  setResumeSelected(false);
                  setAboutSelected(true)
              }
              }>About Me</a></h4>
              </li>
          <li className={`mx-2 nav-item ${portfolioSelected && 'nav-link active'}`}>
              <h4><a href='#portfolio' onClick={() => 
            {
                setContactSelected(false); 
                setPortfolioSelected(true); 
                setResumeSelected(false);
                setAboutSelected(false)
            }}>Portfolio</a></h4>
              </li>
          <li className={`nav-item ${contactSelected && 'nav-link active'}`}>
              <h4><a href='#contact' onClick={() => 
                {
                    setContactSelected(true); 
                    setPortfolioSelected(false); 
                    setResumeSelected(false);
                    setAboutSelected(false)
                }}>Contact</a></h4>
              </li>
          <li className={`mx-2 nav-item ${resumeSelected && 'nav-link active'}`}>
              <h4><a href='#resume' onClick={() => 
            {
                setContactSelected(false); 
                setPortfolioSelected(false); 
                setResumeSelected(true);
                setAboutSelected(false)
            }}>Resume</a></h4>
              </li>
        </ul>
        </header>
    );
}

export default Nav;