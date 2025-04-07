import './App.css';
import './css/styles.css';
import './css/output.css';
import Nav from './js/nav.js';
import { ContactBadges, IconBadges, ToTop } from './js/badges.js';
import RenderProjects from './js/projects.js';
import ProfilePhoto from './assets/photo_PaulaAbigail_Tam.JPG';
import RenderExperience from './js/experience.js';
import RenderEducation from './js/education.js';
import SectionBanner from './js/sectionBanner.js';

function App() {
  return (
    <>
      <Nav />
      <main className="gap-4">
        <div id="hero" className="h-dvh scroll-mt-12 flex justify-center">
          <div className="flex flex-row justify-center items-center gap-2 m-auto">
            <div className="center-items">
              <p className="font-bold text-3xl">Paula Abigail T. Tam</p>
              <p className="font-semibold text-xl">Frontend Engineer | Software Engineer | Fullstack Engineer</p>
              <p>I am a Software Engineer with a focus on frontend. Currently based in the San Francisco Bay Area, CA. Nice to meet you!</p>
              <p>I'm passionate about creating creative, engaging, and intuitive web experiences.</p>
            </div>
            <div className="grid place-items-center rounded-full">
              <div className="size-44 col-start-1 row-start-1 rounded-full bg-gradient-to-r from-custom-accent to-custom-main animate-spin p-0.5 z-0"/>
              <img src={ProfilePhoto} alt='img here' className="size-40 col-start-1 row-start-1  rounded-full object-cover z-10" />
            </div>
          </div>
        </div>
        <div id="about" className="flex-1 center-items gap-6 m-auto scroll-mt-12">
          <SectionBanner item={"About me!"} />
          <div>
            <p>I graduated in May 2023 with a BS in Computer Science and a Minor in Mathematics.</p>
            <p>I am currently working part-time as a Data Analytics Instructor at COOP Careers.</p>
          </div>
          <div id="skills">
            <SectionBanner item={"Skills"} />
            <IconBadges />
          </div>
        </div>
        <div id="experience" className="flex-1 center-items gap-6 m-auto scroll-mt-12">
          <SectionBanner item={"Experience"} />
          <RenderExperience />
        </div>
        <div id="projects" className="flex-1 center-items gap-6 m-auto scroll-mt-12">
          <SectionBanner item={"Projects"} />
          <RenderProjects />
        </div>
        <div id="education" className="flex-1 center-items gap-6 m-auto scroll-mt-12">
          <SectionBanner item={"Education"} />
          <RenderEducation />
        </div>
        <div id="contact" className="scroll-mt-12 p-4">
          <SectionBanner item={"Contacts"} />
          <ContactBadges />
        </div>
        <ToTop />
      </main>
    </>
  );
}

export default App;
