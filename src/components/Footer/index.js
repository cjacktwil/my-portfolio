import React from 'react';

function Footer() {

    return(
        <footer>
            {/* <div className={`container`}>
            <div className={`row`}> */}
            <div className={`d-flex justify-content-center`}>
            <a href='https://github.com/cjacktwil' 
            // className={`col-sm`}
            >
                <img 
                src="./assets/images/GitHub-Mark-Light-64px.png"
                alt="GitHub Account"
                width="25px"></img>
            </a>
            <a href='https://www.linkedin.com/in/tracey-jackson-55b9b650/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B8tPlz%2B57SDCedexlpB61Jg%3D%3D' 
            // className={`col-sm`}
            >
                <img
                src="https://icon-library.net//images/white-linkedin-icon-transparent-background/white-linkedin-icon-transparent-background-2.jpg" 
                width="25"
                alt="LinkedIn Account"></img>
            </a>
            <a href='https://twitter.com/cjacktwil' 
            // className={`col-sm`}
            >
                <img
                src="./assets/images/Twitter_Social_Icon_Rounded_Square_White.svg"
                width="25"
                alt="Twitter Account"></img>
                </a>
                </div>
                {/* </div> */}
        </footer>
    );
}

export default Footer;