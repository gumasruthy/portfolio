import Nav from './components/Nav';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main>
        {/* Main content sections */}
        <Home />
        <Experience/>
        <Projects/>
        <Skills />
        <Education/>
        <Leadership/>
        <Contact/>
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;