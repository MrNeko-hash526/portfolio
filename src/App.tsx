import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-[rgb(33,33,36)]' : 'bg-white'
    }`}>
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Experience isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <Certifications isDark={isDark} />
      <Education isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  );
}

export default App;
