import React from 'react';

function About() {

    return(
<section>
    <h2>ABOUT ME</h2>
    <div className={`card mb-3`}>
        <div className={`row no-gutters`}>
            <div className={`col-md-2 pic`}>
    <img 
    src='./assets/images/tracey_jackson.jpg' 
    alt='Tracey'
    width="200"
    className={`my-pic`}
    ></img>
    </div>
    <div className={`col-md-10 about`}>
        <div className={`card-body about-me`}>
    <h3 className={`card-title`}>Tracey Jackson</h3>
    <p className={`card-text`}>With more than 20 years of experience in marketing, communications, creative, and sales, I bring a unique perspective to your web development project. I incorporate a big-picture mindset, an eye for functionality, and end-user perspective into all of my projects.</p>
    <p className={`card-text`}>In my free time, I love the outdoors: hiking, camping, gardening, or relaxing with a good book on the beach or in my hammock.</p>
</div>
</div>
</div>
</div>
</section>

)
} 

export default About
