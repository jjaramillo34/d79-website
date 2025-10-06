import { GraduationCap, Users, BookOpen, Globe, MapPin, Clock, Award, ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function Above21() {
  const programFeatures = [
    {
      title: "Adult Basic Education (ABE)",
      description: "Build fundamental skills in reading, writing, and mathematics to prepare for higher education or career advancement.",
      icon: BookOpen
    },
    {
      title: "Career and Technical Education (CTE)",
      description: "Gain hands-on training and industry certifications in high-demand career fields.",
      icon: Award
    },
    {
      title: "High School Equivalency Preparation (HSE)",
      description: "Prepare for and earn your high school equivalency diploma through comprehensive test preparation.",
      icon: GraduationCap
    },
    {
      title: "English for Speakers of Other Languages (ESOL)",
      description: "Improve your English language skills for better career opportunities and daily life.",
      icon: Globe
    }
  ];

  const eligibilityRequirements = [
    "21 years of age or older",
    "Have not earned a U.S. high school diploma or equivalency",
    "Reside in New York City",
    "Meet program-specific requirements"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Programs for Above 21
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Continue your educational journey with our comprehensive adult education programs designed for learners 21 and older.
            </p>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Adult Education Program */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <BookOpen className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Adult Education</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Adult Education provides more than 900 tuition-free classes for eligible students (21 years and older who have not earned a U.S. high school diploma or equivalency).
            </p>
            <a
              href="https://adultedu.nyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
            >
              Adult Education (Ages 21+)
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Program Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {programFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-600' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-br ${colorScheme.bg} p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${colorScheme.icon}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Eligibility Requirements</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To participate in our Adult Education programs, you must meet the following requirements:
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-2xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {eligibilityRequirements.map((requirement, index) => {
                  const colors = [
                    { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                    { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                    { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' },
                    { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-600' }
                  ];
                  const colorScheme = colors[index % colors.length];
                  
                  return (
                    <div key={index} className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                      <div className={`bg-gradient-to-br ${colorScheme.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <CheckCircle className={`h-6 w-6 ${colorScheme.icon}`} />
                      </div>
                      <span className="text-gray-700 font-semibold text-lg">{requirement}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Sites */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <MapPin className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Adult Education School Sites</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find a location near you with our interactive map of Adult Education sites throughout New York City.
            </p>
          </div>

          {/* Placeholder for map - in a real application, you would integrate the actual map */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Map of School Sites</h3>
                <p className="text-gray-600 text-lg mb-2">Visit <a href="https://adultedu.nyc/" className="text-blue-600 hover:text-blue-800 font-semibold" target="_blank" rel="noopener noreferrer">adultedu.nyc</a> to find locations near you</p>
                <p className="text-gray-500">Over 900 tuition-free classes available throughout NYC</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://adultedu.nyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
            >
              Find a Location Near You
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
              <Star className="h-10 w-10 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Adult Education?</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our programs are designed to help you achieve your educational and career goals at any stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Schedules</h3>
              <p className="text-gray-600 leading-relaxed">
                Classes available during day, evening, and weekend hours to fit your busy schedule.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tuition-Free</h3>
              <p className="text-gray-600 leading-relaxed">
                All classes are completely free for eligible students - no cost to you.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Programs designed to prepare you for better job opportunities and career advancement.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supportive Environment</h3>
              <p className="text-gray-600 leading-relaxed">
                Caring instructors and staff who understand the unique needs of adult learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
            <ArrowRight className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Take the first step toward achieving your educational and career goals. Contact us today to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://adultedu.nyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Visit Adult Education</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/contact"
              className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
