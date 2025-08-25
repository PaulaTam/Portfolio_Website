import React from 'react';
import { TextBadges } from './badges.js';

const experienceLinks = [
  {
    role: "Data Analytics Instructor",
    company: "COOP Careers",
    companyWebsite: "https://coopcareers.org/",
    desc: 
    [
      "Instruct 16 to 20 students transitioning into data analytics through a 4 month fellowship program, to ensure a retention rate of more than 85%.",
      "Collaborate with a team of 3 co-instructors to facilitate a series of career development and data analytics workshops on Excel, Tableau, and SQL.",
      "Oversee and provide input to fellows’ deliverables, culminating in a client-facing data capstone project."
    ],
    start: "January 2025",
    end: "Present"
  },
  {
    role: "Frontend Engineer Intern",
    company: "Tymeline",
    companyWebsite: "https://www.tymeline.app/",
    desc: 
    [
      "Developed React pages according to the new, revamped UI designs on Figma in preparation for an UI migration in early 2025 to drive client acquisition.",
      "Contributed by creating page templates and implementing components for authentication flow such as Sign-in and Onboarding and implementing existing login and integration APIs.",
      "Utilized React Redux and react-hook-form for state management which allowed for better efficiency with forms and page navigation.",
      "Attended daily stand-ups to give updates, agenda planning, and demoing any new implementations to higher ups to showcase improvements.",
      "Collaborated with other interns to maintain consistency with shared files and to increase work efficiency."
    ],
    start: "August 2024",
    end: "November 2024"
  },
  {
    role: "Peer Instructional Leader",
    company: "Skyline College - STEM Center",
    companyWebsite: "https://skylinecollege.edu/stemcenter/",
    desc: 
    [
      "Tutored students in 1-2 hour in-person / Zoom sessions on STEM topics.",
      "Assisted professors with in-class material by providing student support during lessons."
    ],
    start: "August 2019",
    end: "May 2022"
  }
];

const RenderExperience = () => {
  return (
    <>
      {experienceLinks.map(item => (
      <div key={item.role} className="flex flex-row">
        <div className="flex flex-col flex-1 gap-2">
          <p className="bg-custom-accent text-custom-dark text-center font-semibold">{item.role}</p>
          <div className="flex flex-row gap-2 font-semibold text-lg">
            <p>Company:</p>
            <a href={item.companyWebsite} className="hover underline">{item.company}</a>
          </div>
          <div className="flex flex-wrap gap-3">
            <p>Start date: 
              <TextBadges item={item.start} />
            </p>
            <p>End date: 
              <TextBadges item={item.end} />
            </p> 
          </div>
          <div>
              {item.desc.map(ele => (
                <li>{ele}</li>
              ))}
          </div>
        </div>
      </div>
    ))}
    </>
  )
};

export default RenderExperience;