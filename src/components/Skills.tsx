import { Code, Layers, Database, Wrench, BookOpen } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    gradient: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Frameworks',
    icon: Layers,
    skills: ['React', 'Node.js', 'Express.js', 'Flask', 'FastAPI', 'Chakra-UI', 'Redux Toolkit'],
    gradient: 'from-cyan-400 to-teal-400',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL (Supabase)', 'MongoDB', 'MySQL'],
    gradient: 'from-teal-400 to-emerald-400',
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Prisma', 'Postman'],
    gradient: 'from-emerald-400 to-green-400',
  },
  {
    title: 'Libraries',
    icon: BookOpen,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn'],
    gradient: 'from-green-400 to-lime-400',
  },
];

const Skills = ({ isDark }: SkillsProps) => {
  return (
    <section id="skills" className={`py-20 transition-colors duration-500 ${
      isDark ? 'bg-[rgb(40,40,43)]' : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-xl transition-transform duration-200 hover:-translate-y-1 overflow-hidden ${isDark ? 'bg-[rgb(45,45,48)] border border-[rgba(255,255,255,0.05)]' : 'bg-white border border-gray-100'}`}
                >
                  {/* Subtle gradient background accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 bg-gradient-to-br ${category.gradient}`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-200 ${isDark ? 'bg-[rgba(255,255,255,0.05)] text-gray-200 hover:bg-[rgba(255,255,255,0.08)]' : 'bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-800 hover:from-blue-100 hover:to-cyan-100'}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
