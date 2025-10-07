import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ContactProps {
  isDark: boolean;
}

const Contact = ({ isDark }: ContactProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="contact" className={`py-20 transition-colors duration-500 ${
        isDark ? 'bg-[rgb(33,33,36)]' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className={`text-center mb-12 max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <a href="mailto:rajharshit789@gmail.com" className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>rajharshit789@gmail.com</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/harshit-raj-a93497248" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect on LinkedIn</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>linkedin.com/in/harshit-raj-a93497248</div>
                  </div>
                </a>

                <a href="https://github.com/MrNeko-hash526" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>GitHub</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>github.com/MrNeko-hash526</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={isDark ? 'bg-[rgb(20,20,22)] text-white py-8' : 'bg-gray-900 text-white py-8'}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Harshit Raj. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Contact;
