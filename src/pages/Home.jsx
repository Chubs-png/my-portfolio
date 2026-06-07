import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';

const Home = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else if (!state) {
        window.scrollTo(0, 0);
    }
  }, [state]);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 pt-24 animate-fade-in space-y-6">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <About />
        <Experience />
        <Skills />
        <Portfolio />
      </div>
    </main>
  );
};

export default Home;
