import { BookOpen, Users, Calendar, Phone, Mail, Globe, Heart, Shield, MapPin, ArrowRight, Star, Award, GraduationCap, FileText, AlertTriangle, Home, Briefcase, Utensils, Scale, Zap } from 'lucide-react';

export default function Resources() {

  const quickLinks = [
    { name: "Student Portal", url: "#", icon: Globe, description: "Access your grades, assignments, and school information" },
    { name: "Library Resources", url: "#", icon: BookOpen, description: "Digital library and research materials" },
    { name: "Academic Calendar", url: "#", icon: Calendar, description: "Important dates and school events" },
    { name: "Contact Directory", url: "#", icon: Phone, description: "Find staff and program contacts" },
    { name: "Emergency Contacts", url: "#", icon: Shield, description: "24/7 crisis support and emergency resources" },
    { name: "Parent Resources", url: "#", icon: Users, description: "Information and support for families" },
    { name: "Program Applications", url: "#", icon: FileText, description: "Apply to District 79 programs" },
    { name: "Graduation Info", url: "#", icon: GraduationCap, description: "Ceremony details and requirements" },
    { name: "Career Services", url: "#", icon: Briefcase, description: "Job placement and career guidance" },
    { name: "Financial Aid", url: "#", icon: Award, description: "Scholarships and financial assistance" }
  ];

  const resourceCategories = [
    {
      title: "Academic Support",
      icon: BookOpen,
      color: "blue",
      resources: [
        { name: "Tutoring Services", description: "Free one-on-one and group tutoring" },
        { name: "Study Groups", description: "Peer learning and study sessions" },
        { name: "Academic Advising", description: "Course selection and planning guidance" },
        { name: "Library Services", description: "Research assistance and materials" }
      ]
    },
    {
      title: "Career & Employment",
      icon: Briefcase,
      color: "green",
      resources: [
        { name: "Job Placement", description: "Career counseling and job matching" },
        { name: "Resume Building", description: "Professional resume and cover letter help" },
        { name: "Interview Preparation", description: "Mock interviews and coaching" },
        { name: "Industry Partnerships", description: "Connections with local employers" }
      ]
    },
    {
      title: "Health & Wellness",
      icon: Heart,
      color: "red",
      resources: [
        { name: "Mental Health Services", description: "Counseling and therapy referrals" },
        { name: "Health Insurance", description: "Assistance with health coverage" },
        { name: "Nutrition Programs", description: "Food assistance and meal programs" },
        { name: "Fitness & Recreation", description: "Sports and wellness activities" }
      ]
    },
    {
      title: "Housing & Basic Needs",
      icon: Home,
      color: "purple",
      resources: [
        { name: "Housing Assistance", description: "Emergency shelter and housing support" },
        { name: "Clothing Programs", description: "Free clothing and personal items" },
        { name: "Food Resources", description: "Food pantries and meal assistance" },
        { name: "Transportation", description: "Metro cards and travel assistance" }
      ]
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
              Student Resources
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Access all the tools, guides, and support you need to succeed in your educational journey.
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

      {/* Community Resources */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Heart className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Community Resources</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support services available to our students and families.
            </p>
          </div>

          {/* School Social Worker Contact */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-10 mb-16">
            <div className="flex items-start space-x-8">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-16 w-16 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">District 79 School Counseling Support</h3>
                <p className="text-xl font-semibold text-blue-600 mb-6">Keri-Ann Ket-Ying, LCSW, School Social Worker</p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-lg">90-01 Sutphin Blvd. 2nd Fl Jamaica, NY 11435</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <a href="mailto:kketying@schools.nyc.gov" className="text-lg hover:text-blue-600 transition-colors font-medium">
                      kketying@schools.nyc.gov
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Available Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Mental Health Referrals", url: "#", icon: Heart, color: "red" },
                  { name: "Healthcare Services", url: "#", icon: Shield, color: "blue" },
                  { name: "City-Wide Substance Abuse Resources", url: "#", icon: AlertTriangle, color: "yellow" },
                  { name: "Support for students/families involved with justice system", url: "#", icon: Scale, color: "purple" },
                  { name: "City-Wide Legal Immigration Resources", url: "#", icon: FileText, color: "green" },
                  { name: "Employment Services", url: "#", icon: Briefcase, color: "indigo" },
                  { name: "NYC Clothing/Housing/Shelter/Cash Assistance", url: "#", icon: Home, color: "pink" },
                  { name: "City-Wide Food Resources", url: "#", icon: Utensils, color: "orange" },
                  { name: "City-Wide Parent Advocacy", url: "#", icon: Users, color: "teal" },
                  { name: "Adult Protective Services", url: "#", icon: Shield, color: "red" },
                  { name: "Foster Care Resources", url: "#", icon: Heart, color: "blue" },
                  { name: "Suicide Prevention", url: "#", icon: AlertTriangle, color: "red" },
                  { name: "Human Trafficking Prevention and Care", url: "#", icon: Shield, color: "purple" },
                  { name: "Domestic Violence and Sexual Assault Resources", url: "#", icon: Heart, color: "red" },
                  { name: "Eating Disorder Treatment", url: "#", icon: Heart, color: "pink" },
                  { name: "To Report Discrimination", url: "#", icon: Scale, color: "yellow" },
                  { name: "Education Resources & Advocacy", url: "#", icon: BookOpen, color: "blue" },
                  { name: "Support for Asian Communities", url: "#", icon: Users, color: "green" },
                  { name: "LGBTQ+ Affirming", url: "#", icon: Heart, color: "rainbow" },
                  { name: "Reproductive Health Information and Health Resources", url: "#", icon: Heart, color: "pink" },
                  { name: "Sports and Recreation", url: "#", icon: Zap, color: "green" },
                  { name: "SEL Resources", url: "#", icon: Star, color: "purple" }
                ].map((service, index) => {
                  const colors = {
                    red: { bg: 'from-red-100 to-red-200', icon: 'text-red-600', badge: 'bg-red-100 text-red-800' },
                    blue: { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-800' },
                    yellow: { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', badge: 'bg-yellow-100 text-yellow-800' },
                    purple: { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-800' },
                    green: { bg: 'from-green-100 to-green-200', icon: 'text-green-600', badge: 'bg-green-100 text-green-800' },
                    indigo: { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-800' },
                    pink: { bg: 'from-pink-100 to-pink-200', icon: 'text-pink-600', badge: 'bg-pink-100 text-pink-800' },
                    orange: { bg: 'from-orange-100 to-orange-200', icon: 'text-orange-600', badge: 'bg-orange-100 text-orange-800' },
                    teal: { bg: 'from-teal-100 to-teal-200', icon: 'text-teal-600', badge: 'bg-teal-100 text-teal-800' },
                    rainbow: { bg: 'from-gradient-to-r from-red-100 via-yellow-100 to-purple-100', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-800' }
                  };
                  const colorScheme = colors[service.color as keyof typeof colors] || colors.blue;
                  const IconComponent = service.icon;
                  
                  return (
                    <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`bg-gradient-to-br ${colorScheme.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-8 w-8 ${colorScheme.icon}`} />
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                        {service.name}
                      </h4>
                      <a
                        href={service.url}
                        className="group/link text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center transition-colors"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Zap className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Quick Access</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fast access to the most commonly used resources and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-600' },
                { bg: 'from-red-100 to-red-200', icon: 'text-red-600', accent: 'bg-red-600' },
                { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', accent: 'bg-indigo-600' },
                { bg: 'from-pink-100 to-pink-200', icon: 'text-pink-600', accent: 'bg-pink-600' },
                { bg: 'from-teal-100 to-teal-200', icon: 'text-teal-600', accent: 'bg-teal-600' },
                { bg: 'from-orange-100 to-orange-200', icon: 'text-orange-600', accent: 'bg-orange-600' },
                { bg: 'from-cyan-100 to-cyan-200', icon: 'text-cyan-600', accent: 'bg-cyan-600' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <a
                  key={index}
                  href={link.url}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8 text-center"
                >
                  <div className={`bg-gradient-to-br ${colorScheme.bg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-10 w-10 ${colorScheme.icon}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {link.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold text-sm">
                    <span>Access Now</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>




      {/* Resource Categories */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <Star className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resource Categories</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Organized resources to help you find exactly what you need for your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colors = {
                blue: { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                green: { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                red: { bg: 'from-red-100 to-red-200', icon: 'text-red-600', accent: 'bg-red-600' },
                purple: { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' }
              };
              const colorScheme = colors[category.color as keyof typeof colors];
              
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-10">
                  <div className="flex items-center mb-8">
                    <div className={`bg-gradient-to-br ${colorScheme.bg} p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-12 w-12 ${colorScheme.icon}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className={`${colorScheme.accent} w-2 h-2 rounded-full mt-2 flex-shrink-0`}></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{resource.name}</h4>
                          <p className="text-gray-600 text-sm">{resource.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="relative py-24 bg-gradient-to-br from-red-50 to-red-100 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-200/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-300/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <AlertTriangle className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Emergency Resources</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              If you&apos;re in crisis or need immediate help, these resources are available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-10 text-center">
              <div className="bg-gradient-to-br from-red-100 to-red-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crisis Hotline</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">24/7 support for mental health crises</p>
              <a href="tel:988" className="text-red-600 font-bold text-2xl hover:text-red-700 transition-colors">988</a>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-10 text-center">
              <div className="bg-gradient-to-br from-red-100 to-red-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">For immediate safety concerns</p>
              <a href="tel:911" className="text-red-600 font-bold text-2xl hover:text-red-700 transition-colors">911</a>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-10 text-center">
              <div className="bg-gradient-to-br from-red-100 to-red-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">District 79 crisis support</p>
              <a href="tel:718-557-2590" className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors">(718) 557-2590</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

