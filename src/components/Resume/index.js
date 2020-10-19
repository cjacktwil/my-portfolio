import React from 'react';

function Resume() {

    return(
        <section>
            <h2>MY RESUME</h2>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Handlebars</li>
                <li>Responsive Design</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Express</li>
                <li>MySQL/Sequelize</li>
                <li>Mongoose/MongoDB</li>
            </ul>
            <a href="./assets/Tracey_Jackson_CV_2020.pdf" download><button className={`btn`}>Download Resume</button></a>
        </section>
    );
}

export default Resume;