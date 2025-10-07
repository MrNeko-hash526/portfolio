import { Github, Linkedin, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  isDark: boolean;
}

const Hero = ({ isDark }: HeroProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [bgImage, setBgImage] = useState<string | null>(null);

  const roles = [
    'Full-Stack Developer',
    'Python Developer',
    'Backend Engineer',
    'React Developer'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Choose hero background image: prefer /hero.png, fallback to /hero.jpg if not present
  useEffect(() => {
    let mounted = true;
    const tryPng = new Image();
    tryPng.onload = () => { if (mounted) setBgImage('/hero.png'); };
    tryPng.onerror = () => {
      const tryJpg = new Image();
      tryJpg.onload = () => { if (mounted) setBgImage('/hero.jpg'); };
      tryJpg.onerror = () => { if (mounted) setBgImage(null); };
      tryJpg.src = '/hero.jpg';
    };
    tryPng.src = '/hero.png';
    return () => { mounted = false; };
  }, []);

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Harshit_Raj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500">
      {/* Background image (if available) */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${bgImage}')` }}
          aria-hidden
        />
      )}

      {/* Adaptive overlay to keep text readable on top of image */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-[rgb(33,33,36)]/70' : 'bg-[rgb(33,33,36)]/30'}`} />
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-96 h-96 -top-48 -left-48 rounded-full blur-3xl animate-pulse-slow ${
          isDark ? 'bg-blue-500/10' : 'bg-blue-200/50'
        }`}></div>
        <div className={`absolute w-96 h-96 -bottom-48 -right-48 rounded-full blur-3xl animate-pulse-slow animation-delay-2000 ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-200/50'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="inline-block mb-8 animate-fade-in-scale">
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-500">
              HR
            </div>
          </div>

          {/* Name */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 animate-fade-in ${
              isDark
                ? 'bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-300 bg-clip-text text-transparent'
                : 'text-blue-700'
            }`}
            style={!isDark ? { textShadow: '0 6px 18px rgba(8,30,52,0.18)' } : undefined}
          >
            Harshit Raj
          </h1>

          {/* Typing Animation */}
          <div className="h-12 md:h-14 mb-6 animate-slide-up animation-delay-500">
            <p
              className={`text-xl md:text-2xl font-medium ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}
              style={!isDark ? { textShadow: '0 4px 12px rgba(8,30,52,0.12)' } : undefined}
            >
              {text}
              <span className={`inline-block w-0.5 h-6 ml-1 animate-blink ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}`}></span>
            </p>
          </div>

          {/* Description */}
          <p
            className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-1000 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            style={!isDark ? { textShadow: '0 3px 10px rgba(8,30,52,0.08)' } : undefined}
          >
            Passionate about building <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>full-stack web applications</span> with expertise in <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Python, React, and Node.js</span>
          </p>
          
          {/* Key Highlights */}
          <div className={`flex flex-wrap gap-3 justify-center mb-12 animate-slide-up animation-delay-1000 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? 'bg-[rgb(45,45,48)] border-gray-700' : 'bg-white/80 backdrop-blur-sm border-gray-200'}`}>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Available for Opportunities</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              isDark ? 'bg-[rgb(45,45,48)] border-gray-700' : 'bg-gray-50 border-gray-200'
            }`}>
              <span className="text-sm font-medium">📍 Gurgaon, India</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              isDark ? 'bg-[rgb(45,45,48)] border-gray-700' : 'bg-gray-50 border-gray-200'
            }`}>
              <span className="text-sm font-medium">🎓 B.Tech in Computer Science</span>
            </div>
          </div>

          {/* CTA Buttons - Improved for Recruiters */}
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up animation-delay-1500">
            <button
              onClick={handleDownloadResume}
              className={`group flex items-center gap-2 px-8 py-4 rounded-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold text-base ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
              }`}
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
            
            <a
              href="#contact"
              className={`group flex items-center gap-2 px-8 py-4 rounded-lg border-2 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base ${isDark ? 'bg-transparent text-cyan-400 border-cyan-500 hover:bg-cyan-500 hover:text-white' : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white'}`}
            >
              <span>Get In Touch</span>
            </a>
          </div>
          
          {/* Social Links - Secondary */}
          <div className="flex gap-4 justify-center mt-6 animate-slide-up animation-delay-1500">
            <a
              href="https://linkedin.com/in/harshit-raj-a93497248"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'text-gray-400 hover:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/MrNeko-hash526"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="View GitHub Profile"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
      >
        <div className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 animate-bounce-slow ${
          isDark ? 'border-gray-400' : 'border-gray-600'
        }`}>
          <div className={`w-1 h-2 rounded-full animate-scroll-down ${
            isDark ? 'bg-cyan-400' : 'bg-blue-600'
          }`}></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
