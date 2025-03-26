import './App.css';
import './css/styles.css';
import './css/output.css';
import Nav from './js/nav.js';
import { ContactBadges, IconBadges, ToTop } from './js/badges.js';
import RenderProjects from './js/projects';
import ProfilePhoto from './assets/photo_PaulaAbigail_Tam.JPG';
import RenderExperience from './js/experience';

function App() {
  return (
    <>
      <Nav />
      <main>
        <div id="hero" className="h-dvh scroll-mt-12 flex justify-center">
          <div className="flex flex-row justify-center items-center gap-2 m-auto">
            <div className="center-items">
              <p className="font-bold text-3xl">Paula Abigail T. Tam</p>
              <p className="font-semibold text-xl">Frontend Engineer | Software Engineer | Fullstack Engineer</p>
              <p>I am a Software Engineer with a focus on frontend. Currently based in the San Francisco Bay Area, CA. Nice to meet you!</p>
              <p>I'm passionate about creating creative, engaging, and intuitive web experiences.</p>
            </div>
            <div className="h-40 w-40 border">
              <img src={ProfilePhoto} alt='img here' />
            </div>
          </div>
        </div>
        <div id="about" className="h-96 flex flex-col justify-between scroll-mt-12">
          <div className="flex-1 center-items m-auto">
            <p className="font-semibold text-xl">About Me!</p>
            <p>I graduated in May 2023 with a BS in Computer Science and a Minor in Mathematics.</p>
            <p>I am currently working part-time as a Data Analytics Instructor at COOP Careers.</p>
          </div>
          <div id="skills" className="flex-1 center-items m-auto">
            <IconBadges />
          </div>
        </div>
        <div id="experience" className="flex-1 center-items gap-6 m-auto scroll-mt-12">
          <RenderExperience />
        </div> {/*change height to fit-content later on*/}
        <div id="projects" className="flex-1 center-items gap-6 m-auto scroll-mt-12">
          <RenderProjects />
        </div>
        <div id="education" className="h-96 scroll-mt-12">
          <div className="center-items text-left">education</div>
        </div>
        <div id="contact" className="scroll-mt-12 p-4">
          <p className="font-semibold text-xl">Contact</p>
          <ContactBadges />
        </div>
        <ToTop />
      </main>
    </>
  );
}

export default App;
