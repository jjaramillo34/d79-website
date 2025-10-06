import { BookOpen, Users, Clock, Award, GraduationCap, Briefcase, Laptop, Heart, ArrowRight, MapPin, Star, CheckCircle } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: "Credit Recovery Program",
      description: "Help students catch up on missed credits and get back on track for graduation.",
      icon: BookOpen,
      features: ["Flexible scheduling", "Individualized learning plans", "Small class sizes", "Experienced teachers"],
      duration: "Self-paced",
      eligibility: "Students behind on credits"
    },
    {
      title: "Alternative High School",
      description: "A comprehensive high school program designed for students who need a different approach to learning.",
      icon: GraduationCap,
      features: ["Full diploma program", "Career exploration", "Life skills training", "College preparation"],
      duration: "2-4 years",
      eligibility: "Ages 16-21"
    },
    {
      title: "Career & Technical Education",
      description: "Hands-on training in high-demand career fields with industry certifications.",
      icon: Briefcase,
      features: ["Industry partnerships", "Certification programs", "Job placement assistance", "Work-based learning"],
      duration: "1-2 years",
      eligibility: "High school students"
    },
    {
      title: "Online Learning Academy",
      description: "Flexible online education for students who need to learn from home or work at their own pace.",
      icon: Laptop,
      features: ["24/7 access", "Self-paced learning", "Virtual support", "Interactive content"],
      duration: "Flexible",
      eligibility: "All students"
    },
    {
      title: "Special Education Services",
      description: "Comprehensive support for students with special needs and learning differences.",
      icon: Heart,
      features: ["Individualized education plans", "Specialized instruction", "Therapeutic services", "Transition planning"],
      duration: "Ongoing",
      eligibility: "Students with IEPs"
    },
    {
      title: "Adult Education",
      description: "Programs for adults who want to complete their high school education or learn new skills.",
      icon: Users,
      features: ["GED preparation", "ESL classes", "Basic skills", "Career training"],
      duration: "Flexible",
      eligibility: "Adults 18+"
    }
  ];

  const schools = [
    {
      name: "Horizon Alternative High School",
      location: "Downtown Campus",
      programs: ["Alternative High School", "Credit Recovery", "Career & Technical Education"],
      description: "Our flagship alternative high school serving students in grades 9-12 with comprehensive support services."
    },
    {
      name: "Pathways Learning Center",
      location: "North Campus",
      programs: ["Online Learning", "Special Education", "Adult Education"],
      description: "A flexible learning environment offering multiple pathways to educational success."
    },
    {
      name: "Success Academy",
      location: "South Campus",
      programs: ["Credit Recovery", "Career & Technical Education", "Alternative High School"],
      description: "Focused on helping students develop the skills they need for college and career success."
    },
    {
      name: "Bridge Program",
      location: "East Campus",
      programs: ["Transition Services", "Special Education", "Life Skills"],
      description: "Supporting students with special needs as they transition to adult life and independence."
    }
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
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Programs & Schools
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the educational pathways that can help you achieve your goals and reach your full potential.
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

      {/* Age-Based Program Selection */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Are you looking for an alternative pathway to achieving your diploma?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Click below to connect with us to discuss your options!<br />
              Or read about our programs below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <a
                href="/under21"
                className="block bg-gradient-to-br from-blue-600 to-blue-700 text-white px-10 py-8 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 text-center"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <span>Click Here if you are under 21</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            </div>
            <div className="group">
              <a
                href="/above21"
                className="block bg-gradient-to-br from-green-600 to-green-700 text-white px-10 py-8 rounded-2xl font-bold text-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 text-center"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <span>Click Here if you are above 21</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Programs</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a variety of programs designed to meet the unique needs of every student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-600' },
                { bg: 'from-red-100 to-red-200', icon: 'text-red-600', accent: 'bg-red-600' },
                { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', accent: 'bg-indigo-600' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-br ${colorScheme.bg} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-8 w-8 ${colorScheme.icon}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className={`h-4 w-4 ${colorScheme.icon} mr-2`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4 bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span className="font-semibold">Duration:</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span className="font-semibold">Eligibility:</span>
                        <span className="font-medium">{program.eligibility}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schools Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Schools</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple locations throughout the district, each offering specialized programs and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schools.map((school, index) => {
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-800' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', badge: 'bg-green-100 text-green-800' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-800' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', badge: 'bg-yellow-100 text-yellow-800' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{school.name}</h3>
                        <p className={`${colorScheme.icon} font-semibold text-lg`}>{school.location}</p>
                      </div>
                      <div className={`bg-gradient-to-br ${colorScheme.bg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <GraduationCap className={`h-8 w-8 ${colorScheme.icon}`} />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{school.description}</p>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Available Programs:</h4>
                      <div className="flex flex-wrap gap-2">
                        {school.programs.map((program, programIndex) => (
                          <span key={programIndex} className={`${colorScheme.badge} px-4 py-2 rounded-full text-sm font-medium`}>
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How to Apply</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting started is easy. Follow these simple steps to begin your educational journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-600 leading-relaxed">Reach out to our enrollment team to discuss your needs and available programs.</p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Complete Application</h3>
              <p className="text-gray-600 leading-relaxed">Fill out the application form and provide required documentation.</p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Assessment</h3>
              <p className="text-gray-600 leading-relaxed">Meet with our team for an assessment and program placement.</p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Start Learning</h3>
              <p className="text-gray-600 leading-relaxed">Begin your educational journey with personalized support and guidance.</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Contact us today to learn more about our programs and find the right educational pathway for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="tel:718-557-2590"
              className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Call (718) 557-2590</span>
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

