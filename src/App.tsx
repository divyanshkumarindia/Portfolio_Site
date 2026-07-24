
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}

export default App;
