import { Briefcase, Calendar } from 'lucide-react';

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

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isDark ? 'bg-[rgb(45,45,48)]' : 'bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{exp.role}</h3>
                      <p className={`text-lg font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{exp.company}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 md:ml-auto ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 ml-16">
                  {exp.description.map((item, i) => (
                    <li key={i} className={`flex items-start ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <span className="text-cyan-400 mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 ml-16">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full font-medium ${
                        isDark 
                          ? 'bg-blue-900/30 text-cyan-400' 
                          : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
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
