import { Award, CheckCircle } from 'lucide-react';

interface CertificationsProps {
  isDark: boolean;
}

const certifications = [
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM – Coursera',
  },
  {
    title: 'Google IT Automation with Python',
    issuer: 'Google – Coursera',
  },
  {
    title: 'Configuration Management and the Cloud',
    issuer: 'Google – Coursera',
  },
  {
    title: 'Frontend Web Development with React.js',
    issuer: 'Imcoded',
  },
];

const Certifications = ({ isDark }: CertificationsProps) => {
  return (
    <section id="certifications" className={`py-20 transition-colors duration-500 ${
      isDark ? 'bg-[rgb(33,33,36)]' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-[rgb(45,45,48)] border border-gray-700' 
                    : 'bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{cert.title}</h3>
                    <div className={`flex items-center gap-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">{cert.issuer}</span>
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

export default Certifications;
