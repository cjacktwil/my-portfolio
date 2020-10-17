import React from 'react';

function Project() {
    const [projects] = useState([
        {
        name: "Spontaneous Adventurer",
        languages: "Javascript, HTML, CSS",
        description: "The Spontaneous Adventurer serves as a guide for last-minute getaways and day trips, providing current information on events, nearby parks, weather conditions and current COVID-19 conditions in a given location.",
        link: "https://taylornyquist.github.io/spontaneous-adventurer/",
        image: "../assets/images/screenshots/spontaneous-adventurer.png"
    },
    {
        name: "Buy Smart",
        languages: "JavaScript, CSS, Handlebars, Jquery Mobile, Sequelize, MySQL2, Express",
        description: "BuySmart is an app that helps shoppers keep essential information at their fingertips. Shoppers can add their favorite products, including a category, description, size and price, to the app. They can link the product to the appropriate store, and access this information through a mobile-responive framework on their phone or tablet.",
        link: "https://fast-bastion-33726.herokuapp.com/",
        image: "../assets/images/screenshots/buy-smart.png"    
    }
])
    return(
        <div>
           {projects.map((project, i) => (

           <section>
            <h2>
                {project.name}
                </h2>
                <a href={project.link} target="_blank">
                <img src={project.image} alt="{project.name} screenshot" width="250px"></img> 
            </a>
            <h3>{project.languages}</h3>
            <p>{project.description}</p>
            </section>
            ))} 
        </div>

    );
}

export default Project;