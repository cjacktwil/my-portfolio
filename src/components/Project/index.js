import React, { useState } from 'react';

function Project() {
    const [projects] = useState([
        {
            name: "Spontaneous Adventurer",
            description: "A must-have guide for last-minute excursions, the Spontaneous Adventurer pulls data from multiple public APIs to display helpful information when planning a trip.",
            languages: "Javascript, HTML, CSS",
            github: "https://github.com/taylornyquist/spontaneous-adventurer",
            link: "https://taylornyquist.github.io/spontaneous-adventurer/",
            image: "./assets/images/screenshots/spontaneous-adventurer.png"
        },
        {
            name: "Buy Smart",
            description: "BuySmart keeps essential shopping information at your fingertips. Record information about the items that you buy most, including location, size, price and more, with this simple, mobile-optimized application.",
            languages: "JavaScript, CSS, Handlebars, Jquery Mobile, Sequelize, MySQL2, Express",
            github: "https://github.com/Alex2055/Buysmart",
            link: "https://fast-bastion-33726.herokuapp.com/",
            image: "./assets/images/screenshots/buy-smart.png"
        },
        {
            name: "Uncode Your Career",
            description: "Designed specifically for web developers, Uncode Your Career allows you to filter current open coding positions by location and description, save jobs of interest, and track your application status.",
            languages: "JavaScript, React, Express, GraphQL",
            github: "https://github.com/cjacktwil/uncode-your-career",
            link: "https://murmuring-everglades-03231.herokuapp.com/",
            image: "./assets/images/screenshots/uncode-career.png"
        },
        {
            name: "Run Buddy",
            description: "This mobile-responsive website promotes a fictional fitness services company, featuring CSS styling, tables, and a contact form.",
            languages: "HTML, CSS",
            github: "https://github.com/cjacktwil/run-buddy",
            link: "https://cjacktwil.github.io/run-buddy/",
            image: "./assets/images/screenshots/run-buddy.png"
        },
        {
            name: "Budget Tracker",
            description: "Keep track of your financial situation with this PWA that allows you to easily input debits and credits to track your budget.",
            languages: "JavaScript, CSS, Express, Mongoose",
            github: "https://github.com/cjacktwil/budget-tracker",
            link: "https://ancient-waters-23996.herokuapp.com/",
            image: "./assets/images/screenshots/budget-tracker.png"
        },
        {
            name: "More Tech Blog",
            description: "The More Tech Blog application is features blog functionality for tech news. Users can create an account or log in, then add content or comment on existing content. For testing, create an account using the 'Login' link or use 'testUser' with password '1234'.",
            languages: "JavaScript, Handlebars, CSS, Express, Sequelize, MySQL2",
            github: "https://github.com/cjacktwil/more-tech",
            link: "https://lit-springs-36043.herokuapp.com/",
            image: "./assets/images/screenshots/more-tech.png"
        }

    ])
    return (
        <div className={`container`}>
            <h2 className={`portfolio`}>MY PORTFOLIO</h2>
            <div className={`row row-cols-1 row-cols-md-2`}>
                {/* <div className={`col-sm projects d-flex justify-content-around p-15 m-10 `}> */}
                {projects.map((project, i) => (
                    <div className={`col mb-4`}>
                        <section key={project.name} className={`card m-10 p-15`}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    className={`screenshot card-img-top`}
                                    alt="{project.name} screenshot"
                                    width="250px"
                                    key={project.name}></img>
                            </a>
                            <div className={`card-body`}>
                                <h3 className={`project-name card-title`}>
                                    {project.name}
                                </h3>
                                <p className={'project-description card-text'}>
                                    {project.description}
                                </p>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="./assets/images/GitHub_Logo.png"
                                        alt="GitHub Repository"
                                        width="75px"
                                        key={project.github}></img>
                                </a>
                            </div>
                            {/* <p>{project.languages}</p> */}

                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
