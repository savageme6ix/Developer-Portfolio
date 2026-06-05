import './styles/global.css';

import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import Skills  from './components/Skills';
import Projects from './components/Projects';
import Professional from './components/Professional';
import About   from './components/About';
import Contact from './components/Contact';
import Footer  from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Professional />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
