import { Code2, Database, Sparkles } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About = ({ isDark }: AboutProps) => {
  return (
    <section id="about" className={`py-20 transition-colors duration-500 ${
      isDark ? 'bg-[rgb(33,33,36)]' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12 rounded-full"></div>

          <div className={`rounded-2xl p-8 md:p-12 shadow-lg ${
            isDark ? 'bg-[rgb(45,45,48)]' : 'bg-gradient-to-br from-blue-50 to-cyan-50'
          }`}>
            <p className={`text-lg md:text-xl leading-relaxed mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Hi, I'm Harshit 👋 A <span className={`font-semibold ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>Computer Science student</span> and <span className={`font-semibold ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>Full-Stack Developer</span> passionate about building scalable web applications. I specialize in <span className={`font-semibold ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>Python backend development</span> with FastAPI/Flask and <span className={`font-semibold ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>modern React frontends</span>. Currently interning at Goolean Technologies, where I build REST APIs and full-stack features.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className={`flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                isDark ? 'bg-[rgb(55,55,58)]' : 'bg-white'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-4">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-semibold mb-2 text-base ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Python & Backend APIs</h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>FastAPI, Flask, REST APIs with MySQL & PostgreSQL databases</p>
              </div>

              <div className={`flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                isDark ? 'bg-[rgb(55,55,58)]' : 'bg-white'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-semibold mb-2 text-base ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>React & TypeScript</h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>Building responsive, modern UIs with React, Redux & Chakra UI</p>
              </div>

              <div className={`flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                isDark ? 'bg-[rgb(55,55,58)]' : 'bg-white'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-semibold mb-2 text-base ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Full-Stack Projects</h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>End-to-end applications with authentication & data visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
