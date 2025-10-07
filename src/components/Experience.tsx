import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

const experiences = [
  {
    role: 'Python Developer Intern',
    company: 'Goolean Technologies Pvt Ltd',
    period: 'July 2025 – Present',
    description: [
      'Built REST APIs with FastAPI & Node.js/Express.js (Prisma + MySQL)',
      'Developed UI components in React/TypeScript/Chakra UI',
      'Engineered full-stack features streamlining workflows',
    ],
    technologies: ['FastAPI', 'Node.js', 'Express.js', 'React', 'TypeScript', 'Prisma', 'MySQL', 'Chakra UI'],
  },
  {
    role: 'Data Science Summer School',
    company: 'Dronacharya College of Engineering',
    period: 'June 2024 – July 2024',
    description: [
      'Analyzed datasets with Pandas & NumPy',
      'Performed exploratory data analysis (EDA)',
      'Created data visualizations with Matplotlib & Seaborn',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
];

const Experience = ({ isDark }: ExperienceProps) => {
  return (
    <section id="experience" className={`py-20 transition-colors duration-500 ${
      isDark ? 'bg-[rgb(40,40,43)]' : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

          <div className="divide-y">
            {experiences.map((exp, index) => (
              <div key={index} className={`py-6 ${index !== experiences.length - 1 ? 'border-b' : ''} ${isDark ? 'border-[rgba(255,255,255,0.03)]' : 'border-[rgba(15,23,42,0.04)]'}`}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-xl md:text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company}</p>
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</div>
                    </div>

                    <ul className={`mt-3 space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className={`px-2 py-1 text-xs rounded-full font-medium ${isDark ? 'bg-[rgba(255,255,255,0.03)] text-cyan-300' : 'bg-[rgba(59,130,246,0.06)] text-blue-700'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
