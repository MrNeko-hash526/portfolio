import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationProps {
  isDark: boolean;
}

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Dronacharya College of Engineering',
    location: 'Gurgaon',
    period: 'Oct 2022 – May 2026',
    type: 'Undergraduate',
  },
  {
    degree: 'Senior Secondary',
    institution: "St. Crispins Sr. Sec. School",
    location: 'Gurgaon',
    period: '2019 – 2021',
    type: 'High School',
  },
];

const Education = ({ isDark }: EducationProps) => {
  return (
    <section id="education" className={`py-20 transition-colors duration-500 ${
      isDark ? 'bg-[rgb(40,40,43)]' : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isDark ? 'bg-[rgb(45,45,48)]' : 'bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className={`text-2xl font-bold mb-1 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{edu.degree}</h3>
                        <p className={`text-lg font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>{edu.institution}</p>
                      </div>
                      <span className={`mt-2 md:mt-0 px-4 py-1 text-sm rounded-full font-medium self-start ${
                        isDark 
                          ? 'bg-blue-900/30 text-cyan-400' 
                          : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700'
                      }`}>
                        {edu.type}
                      </span>
                    </div>

                    <div className={`flex flex-wrap gap-4 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>{edu.period}</span>
                      </div>
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

export default Education;
