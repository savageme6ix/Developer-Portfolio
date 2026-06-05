import './styles/global.css';

import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import Skills  from './components/Skills';
import Projects from './components/Projects';
import Professional from './components/Professional';
import About   from './components/About';
import Contact from './components/Contact';
import Footer  from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal><Skills /></ScrollReveal>
        <Projects />
        <ScrollReveal><Professional /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <ScrollReveal delay={0.1}><Footer /></ScrollReveal>
    </>
  );
}
