import './App.css';
import './css/styles.css';
import './css/output.css';
import Nav from './js/nav.js';
import { IconBadges, ToTop } from './js/badges.js';

function App() {
  return (
    <>
      <Nav />
      <main>
        <div id="hero" className="bg-blue-500 h-dvh scroll-mt-12 flex justify-center">
          <div className="flex flex-row justify-center items-center gap-2 m-auto">
            <div className="center-items">
              <p className="font-bold text-3xl">Paula Abigail T. Tam</p>
              <p className="font-semibold text-xl">Frontend Engineer | Software Engineer | Fullstack Engineer</p>
              <p>I am a Software Engineer with a focus on frontend. Currently based in the San Francisco Bay Area, CA. Nice to meet you!</p>
              <p>I'm passionate about creating creative, engaging, and intuitive web experiences.</p>
            </div>
            <div className="h-40 w-40 border">
              <p>img here</p>
            </div>
          </div>
        </div>
        <div id="about" className="bg-slate-500 h-96 flex flex-col justify-between scroll-mt-12">
          <div className="flex-1 center-items m-auto">
            <p className="font-semibold text-xl">About Me!</p>
            <p>I graduated in May 2023 with a Bachlor's in Computer Science and a Minor in Mathematics.</p>
          </div>
          <div id="skills" className="bg-slate-300 flex-1 center-items m-auto">
            <IconBadges />
          </div>
        </div>
        <div id="experience" className="bg-red-500 h-96 scroll-mt-12">
          <div className="center-items text-left">experience</div>
          </div> {/*change height to fit-content later on*/}
        <div id="projects" className="bg-green-500 h-96 scroll-mt-12">projects</div>
        <div id="contact" className="bg-yellow-500 h-48 scroll-mt-12">contact</div>
        <ToTop />
      </main>
    </>
  );
}

export default App;
