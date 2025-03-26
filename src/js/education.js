import React from 'react';
import { TextBadges } from './badges.js';

const educationLinks = [
  {
    school: "San Francisco State University",
    degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
    start: "August 2021",
    end: "May 2023"
  },
  {
    school: "Skyline College",
    degree: "Associate in Science for Transfer in Computer Science",
    start: "August 2018",
    end: "May 2021"
  }
];

const RenderEducation = () => {
  return (
    <>
    {educationLinks.map(item => (
      <div>
        <p className="font-semibold text-xl">{item.school}</p>
        <p>{item.degree}</p>
        <div className="flex flex-wrap gap-3">
          <p>Start date: 
            <TextBadges item={item.start} />
          </p>
          <p>End date: 
            <TextBadges item={item.end} />
          </p> 
        </div> 
      </div>
    ))}
    </>
  )
};

export default RenderEducation;