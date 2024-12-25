import Nav from './components/Nav';
import Home from './components/Home';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
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
        <Contact/>
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;