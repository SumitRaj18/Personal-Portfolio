import Navbar from './components/Navbar';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="App overflow-x-hidden overflow-y-hidden">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
