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
              <div key={index} className={`py-4 ${index !== education.length - 1 ? 'border-b' : ''} ${isDark ? 'border-[rgba(255,255,255,0.03)]' : 'border-[rgba(15,23,42,0.04)]'}`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{edu.institution}</p>
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{edu.period}</div>
                    </div>

                    <div className={`flex flex-wrap gap-4 mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
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
