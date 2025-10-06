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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isDark ? 'bg-[rgb(45,45,48)]' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-300 cursor-default ${
                          isDark 
                            ? 'bg-[rgb(65,65,68)] text-gray-300 hover:bg-[rgb(75,75,78)]' 
                            : 'bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-700 hover:from-blue-100 hover:to-cyan-100'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
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
