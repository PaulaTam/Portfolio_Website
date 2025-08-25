import React from 'react';
import { TextBadges } from './badges.js';
//thumbnails
import seascribe from "../assets/thumbnails/SeaScribe_thumb.png";
import url_shortener from "../assets/thumbnails/URL_Short_thumb.png";

const projectLinks = [
  { name: "This portfolio!", github: "",
    project: "",
    desc: "I designed, developed, and implemented this portfolio from scratch using React, JavaScript, and Tailwind CSS. I utilized what I've learned from my other projects to handcraft my own personal portfolio!",
    img: "",
    tech: [ "React", "JavaScript", "Tailwind CSS", "Git / Github", "Github Pages"]
  },
  {name: "SeaScribe", github: "https://github.com/cherryontech/comet-cruisers-spring2024",
    project: "https://seascribe.netlify.app/",
    desc: "A project done during my time in the CherryOnTech cohort of Spring 2024. SeaScribe is a wellness app designed to provide a nurturing space for individuals grappling with burnout from the demands of school or work. Our mission is to prioritize mental well-being by offering a seamless and supportive platform that encourages users to unwind, reflect, and rejuvenate.",
    img: seascribe,
    tech: ["React", "JavaScript", "Tailwind CSS", "React Hooks", "ESLint", "Prettier", "Git / Github", "Netlify", "Jira"]
  },
  {name: "MyDay", github: "https://github.com/PaulaTam/MyDay",
    project: "",
    desc: "A multi-functional scheduler web app for busy SFSU students. MyDay strives to utilize the functionalities of a calendar while taking into consideration routine breaks and loss of habits that may be forgotten in the future. Features include visually creating, deleting, or updating events in the Scheduler, get suggested locations or activities based on preferences, and a map to be able to visualize walking distances between events on your scheduler.",
    img: "",
    tech: ["React", "JavaScript", "MongoDB", "Express.js", "Node.js", "Bootstrap", "React Bootstrap", "React Hooks", "Axios", "Jest", "Git / Github"]
  },
  {name: "URL Shortener", github: "https://github.com/PaulaTam/url_shortening",
    project: "https://paulatam.github.io/url_shortening/",
    desc: "A simple React application that allows the user to transform long links to shorter links utilizing the TinyURL's API.",
    img: url_shortener,
    tech: ["React", "JavaScript", "Bootstrap", "React Bootstrap", "React Hooks", "Axios", "TinyURL API", "Git / Github", "Github Pages"]
  },
  {name: "Spark Calculator", github: "https://github.com/PaulaTam/spark-calculator",
    project: "https://paulatam.github.io/spark-calculator/",
    desc: "A project that contains several calculators meant to calculate how many rolls you have in a specific game. Utilizes useState and useEffect for real time calculations!",
    img: "",
    tech: ["React", "JavaScript", "Bootstrap", "React Bootstrap", "React Hooks", "Git / Github", "Github Pages"]
  }
];

const RenderProjects = () => {
  return (
    <>
    {projectLinks.map(item => (
      <div key={item.name} className="flex flex-row">
        <img src={item.img} alt={item.name} className="w-10 h-8"/>
        <div className="flex flex-col flex-1">
          <p className="bg-custom-accent text-custom-dark text-center font-semibold">{item.name}</p>
          <p>{item.desc}</p>
          <div className="flex flex-wrap gap-3">
            {item.tech.map(ele => (
              <TextBadges item={ele} />
            ))}
          </div>
          <div className="flex flex-row gap-2">
            <a href={item.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
            {item.project.length > 0 ?
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