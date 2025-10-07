import { Github, Lock } from 'lucide-react';

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
              <article
                key={index}
                className={`flex flex-col rounded-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[rgb(45,45,48)] border border-[rgba(255,255,255,0.04)]'
                    : 'bg-white border border-gray-100'
                }`}
              >
                {/* Header strip */}
                <div className={`h-36 flex items-center p-4 ${project.gradient}`} style={{ backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.15), rgba(0,0,0,0.05))`, backgroundBlendMode: 'overlay' }}>
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-black/20 text-white mr-4">
                    <span className="font-bold">{project.title.split(' ').map(w => w[0]).join('')}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="text-xs text-white/80 mt-1">{project.technologies.slice(0,3).join(' • ')}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className={`text-sm mb-4 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{project.description}</p>

                    {project.credentials && (
                      <div className={`inline-flex items-center gap-2 text-xs font-mono px-2 py-1 rounded ${isDark ? 'bg-amber-900/10 text-amber-300' : 'bg-amber-50 text-amber-800'}`}> 
                        <Lock className="w-4 h-4" />
                        <span>{project.credentials}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded-md ${isDark ? 'bg-[rgba(255,255,255,0.03)] text-cyan-300' : 'bg-[rgba(59,130,246,0.06)] text-blue-700'}`}>{tech}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all">
                          Live Demo
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${project.liveDemo ? 'flex-shrink-0' : 'flex-1'} inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${isDark ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-gray-900 text-white hover:bg-gray-800'} transition-all`}>
                        <Github className="w-4 h-4" />
                        {!project.liveDemo && <span>View Code</span>}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
