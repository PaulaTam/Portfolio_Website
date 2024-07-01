import React from 'react';
//thumbnails
import seascribe from "../assets/thumbnails/SeaScribe_thumb.png";
import url_shortener from "../assets/thumbnails/URL_Short_thumb.png";

const projectLinks = [
  { name: "This portfolio!", github: "",
    project: "",
    desc: "I designed, developed, and implemented this portfolio from scratch using React, JavaScript, and Tailwind CSS. I utilized what I've learned from my other projects to handcraft my own personal portfolio!",
    img: ""
  },
  {name: "SeaScribe", github: "https://github.com/cherryontech/comet-cruisers-spring2024",
    project: "https://github.com/cherryontech/comet-cruisers-spring2024",
    desc: "",
    img: seascribe
  },
  {name: "MyDay", github: "https://github.com/PaulaTam/MyDay",
    project: "",
    desc: "A multi-functional scheduler web app for busy SFSU students. MyDay strives to utilize the functionalities of a calendar while taking into consideration routine breaks and loss of habits that may be forgotten in the future. Features include visually creating, deleting, or updating events in the Scheduler, get suggested locations or activities based on preferences, and a map to be able to visualize walking distances between events on your scheduler.",
    img: ""
  },
  {name: "URL Shortener", github: "https://github.com/PaulaTam/url_shortening",
    project: "https://paulatam.github.io/url_shortening/",
    desc: "A simple React application that allows the user to transform long links to shorter links utilizing the TinyURL's API.",
    img: url_shortener
  },
  {name: "Spark Calculator", github: "https://github.com/PaulaTam/spark-calculator",
    project: "https://paulatam.github.io/spark-calculator/",
    desc: "A project that contains several calculators meant to calculate how many rolls you have in a specific game. Utilizes useState and useEffect for real time calculations!",
    img: ""
  },
];

const RenderProjects = () => {
  return (
    <>
    {projectLinks.map(item => (
      <div key={item.name} className="flex flex-row">
        <img src={item.img} alt={item.name} />
        <div className="flex flex-col">
          <p className="">{item.name}</p>
          <p>{item.desc}</p>
          <div className="flex flex-row gap-2">
            <a href={item.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
            {item.project.length <= 0 ?
              <a href={item.project} target="_blank" rel="noopener noreferrer">Project Link</a>
              : <p>No project link available.</p>
            }
          </div>
        </div>
      </div>
    ))}
    </>
  );
};

export default RenderProjects;