import React from 'react';
//icon imports
//skills
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
//contact
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//misc
import { FaArrowUp } from "react-icons/fa";

export const TextBadges = (props) => {
  return (
    <div className="rounded-xl border w-8 h-4 p-2">
      {props.name}
    </div>
  );
};

const SkillIcons = [
  { name: "React", icon: <FaReact className="icon-center" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="icon-center" /> },
  { name: "HTML5", icon: <FaHtml5 className="icon-center" /> },
  { name: "CSS3", icon: <FaCss3Alt className="icon-center" /> },
  { name: "Python", icon: <FaPython className="icon-center" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="icon-center" /> },
];

export const IconBadges = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {SkillIcons.map(item => (
        <div key={item.name} className="hover text-center p-1">
          {item.icon}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const ContactIcons = [
  { name: "Email", icon: <MdEmail className="contact-icon" /> },
  { name: "LinkedIn", icon: <FaLinkedin className="contact-icon" /> },
  { name: "Github", icon: <FaGithub className="contact-icon" /> },
]

export const ContactBadges = () => {
  return (
    <ul className="pl-4">
      {ContactIcons.map(item => (
        <li key={item.name} className="hover flex flex-row gap-3 p-2">
          {item.icon}
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export const ToTop = () => {
  return (
    <a href="#hero" role="button" className="bg-white flex justify-center items-center fixed bottom-0 right-0 rounded-full shadow animate-bounce h-10 w-10 m-2">
      <FaArrowUp className="h-6 w-6"/>
    </a>
  )
};
