import React, { useState } from 'react';

function Project() {
    const [projects] = useState([
        {
            name: "Spontaneous Adventurer",
            languages: "Javascript, HTML, CSS",
            github: "https://github.com/taylornyquist/spontaneous-adventurer",
            link: "https://taylornyquist.github.io/spontaneous-adventurer/",
            image: "../assets/images/screenshots/spontaneous-adventurer.png"
        },
        {
            name: "Buy Smart",
            languages: "JavaScript, CSS, Handlebars, Jquery Mobile, Sequelize, MySQL2, Express",
            github: "https://github.com/Alex2055/Buysmart",
            link: "https://fast-bastion-33726.herokuapp.com/",
            image: "../public/assets/images/screenshots/buy-smart.png"
        },
        {
            name: "Uncode Your Career",
            languages: "JavaScript, React, Express, GraphQL",
            github: "https://github.com/cjacktwil/uncode-your-career",
            link: "https://murmuring-everglades-03231.herokuapp.com/",
            image: "../assets/images/screenshots/uncode-career.png"
        },
        {
            name: "Run Buddy",
            languages: "HTML, CSS",
            github: "https://github.com/cjacktwil/run-buddy",
            link: "https://cjacktwil.github.io/run-buddy/",
            image: "../assets/images/screenshots/run-buddy.png"
        },
        {
            name: "Budget Tracker",
            languages: "JavaScript, CSS, Express, Mongoose",
            github: "https://github.com/cjacktwil/budget-tracker",
            link: "https://ancient-waters-23996.herokuapp.com/",
            image: "../assets/images/screenshots/budget-tracker.png"
        },
        {
            name: "More Tech Blog",
            languages: "JavaScript, Handlebars, CSS, Express, Sequelize, MySQL2",
            github: "https://github.com/cjacktwil/more-tech",
            link: "https://lit-springs-36043.herokuapp.com/",
            image: "../assets/images/screenshots/more-tech.png"
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