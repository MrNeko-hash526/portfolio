import { ExternalLink, Github, Lock } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const projects = [
  {
    title: 'Personal Expense Tracker',
    description: 'Full-stack tracker with JWT auth, responsive UI, CRUD operations, and Chart.js visualizations.',
    technologies: ['Express.js', 'React', 'MongoDB', 'JWT', 'Tailwind CSS', 'Chart.js'],
    liveDemo: 'https://expense-tracker-mump.vercel.app/login',
    github: 'https://github.com/MrNeko-hash526',
    credentials: 'john@example.com / secure123',
    gradient: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Smart Study Scheduler',
    description: 'Study planner with scheduling, prioritization, analytics (Chart.js), and JWT authentication.',
    technologies: ['React', 'Tailwind CSS', 'Express.js', 'PostgreSQL', 'Supabase', 'JWT', 'Chart.js'],
    liveDemo: 'https://smart-study-schedular.netlify.app/login',
    github: 'https://github.com/MrNeko-hash526',
    credentials: 'watij25147@modirosa.com / 12345678',
    gradient: 'from-cyan-400 to-teal-400',
  },
  {
    title: 'Review Shield',
    description: 'Fake review detector powered by DistilBERT NLP, Flask REST API, and scalable React UI with credibility scoring.',
    technologies: ['React.js', 'Flask', 'DistilBERT', 'NLP', 'Python', 'REST API'],
    liveDemo: null,
    github: 'https://github.com/MrNeko-hash526',
    credentials: null,
    gradient: 'from-teal-400 to-emerald-400',
  },
];

const Projects = ({ isDark }: ProjectsProps) => {
  return (
    <section id="projects" className={`py-20 transition-colors duration-500 ${
      isDark ? 'bg-[rgb(33,33,36)]' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Here are some of my recent projects showcasing full-stack development, data science, and modern web technologies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  isDark ? 'bg-[rgb(45,45,48)] border border-gray-700' : 'bg-white border border-gray-100'
                }`}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {project.credentials && (
                    <div className={`mb-4 p-3 rounded-lg ${
                      isDark ? 'bg-amber-900/20 border border-amber-700' : 'bg-amber-50 border border-amber-200'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Lock className={`w-4 h-4 ${
                          isDark ? 'text-amber-400' : 'text-amber-600'
                        }`} />
                        <span className={`text-xs font-semibold ${
                          isDark ? 'text-amber-300' : 'text-amber-800'
                        }`}>Demo Credentials</span>
                      </div>
                      <p className={`text-xs font-mono ${
                        isDark ? 'text-amber-400' : 'text-amber-700'
                      }`}>{project.credentials}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded-full font-medium ${
                          isDark 
                            ? 'bg-blue-900/30 text-cyan-400' 
                            : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveDemo ? 'flex-shrink-0' : 'flex-1'} flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm font-medium`}
                    >
                      <Github className="w-4 h-4" />
                      {!project.liveDemo && <span>GitHub</span>}
                    </a>
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

export default Projects;
