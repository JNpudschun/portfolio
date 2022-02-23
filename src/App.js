import './App.css';
import CV from './components/CV';
import SkillRow from './components/SkillRow';
import Project from './components/Project';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className ="Navbar" id="navbar">
            <a href="#navbar"><img src="https://via.placeholder.com/50x50.png" alt="Logo"/></a>
            <a href="#aboutMe">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
      </header>
        <div id="aboutMe">
            <CV/>
            <p>My Motivation <br/><br/> LOREM IPSUM ...ProfileWrapper.</p>
        </div>
        <div id="skills">
            <h2>Technologie I work with</h2>
            <SkillRow/> 
        </div>
        <div id="projects">
            <Project num={1}/>
            <Project num={2}/>
            <Project num={3}/>
            <Project num={4}/>
        </div>
      <footer>
      <div className ="footer" id = "contact">
           <h2>Contact Me</h2>
           <p>If you are interested in collaborating contact me</p>
           <ul>
               <li>E-mail: pudschun.j.n@gmx.de</li>
               <li>Phone: 01525/1640106</li>
               <li>LinkedIn: <a href="https://www.linkedin.com/in/jan-niklas-pudschun-1bb828228/">Jan Niklas Pudschun</a></li>
               <li>GitHub: <a href="https://github.com/JNpudschun">Jan Niklas Pudschun</a></li>
           </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
