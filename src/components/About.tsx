import { Code2, Database, Sparkles } from 'lucide-react';
import React from 'react';

interface AboutProps {
  isDark: boolean;
}

// Small local components to reduce repetition

const FeatureRow: React.FC<{ Icon: any; title: string; desc: string; gradientFrom: string; gradientTo: string; isDark: boolean }> = ({ Icon, title, desc, gradientFrom, gradientTo, isDark }) => (
  <div className="flex items-start gap-4">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white`} style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</div>
      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{desc}</div>
    </div>
  </div>
);

const About = ({ isDark }: AboutProps) => {
  return (
    <section id="about" className={`py-20 transition-colors duration-500 ${isDark ? 'bg-[rgb(33,33,36)]' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Intro — simplified: action & impact only */}
            <div>
              <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full" />

              <p className={`text-lg md:text-xl leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                During my internship at Goolean Technologies I built and shipped REST APIs with FastAPI, integrated databases and improved API performance across services. My personal projects demonstrate production-ready patterns — authentication, analytics visualizations and responsive interfaces — helping users manage data and tasks more efficiently.
              </p>
            </div>

            {/* Right: Visual feature panel */}
            <div className={`relative p-8 md:p-12 overflow-hidden ${isDark ? '' : ''}`}>
              <div className="absolute -top-10 -right-10 w-48 h-48 opacity-20 bg-gradient-to-br from-cyan-300 to-blue-400 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 opacity-10 bg-gradient-to-br from-teal-300 to-emerald-300 blur-3xl" />

              <div className="flex flex-col gap-6">
                <FeatureRow Icon={Code2} title="Robust Backends" desc="Scalable APIs, authentication, and database design." gradientFrom="#38bdf8" gradientTo="#60a5fa" isDark={isDark} />
                <FeatureRow Icon={Database} title="Modern Frontends" desc="Accessible, responsive UIs built with React and TypeScript." gradientFrom="#5eead4" gradientTo="#34d399" isDark={isDark} />
                <FeatureRow Icon={Sparkles} title="Impactful Projects" desc="Worked on end-to-end projects with a focus on usability and performance." gradientFrom="#7cfc8a" gradientTo="#34d399" isDark={isDark} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
