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
            <a href="https://docs.google.com/document/d/1Cw5azn0Ln2Oyhh-7Z6VD2AuC8PHwX8pCCPgx-c_-T4M/edit?usp=sharing"><button className={`btn`}>Download Resume</button></a>
        </section>
    );
}

export default Resume;