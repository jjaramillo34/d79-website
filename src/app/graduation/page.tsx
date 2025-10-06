import { GraduationCap, Calendar, MapPin, Users, Award, Camera, Heart, Star, Clock, Mail, Phone, BookOpen, ArrowRight, CheckCircle, Trophy, Sparkles, Image, Play, Eye } from 'lucide-react';

export default function Graduation() {
  const graduationInfo = [
    {
      title: "2024 Graduation Ceremony",
      date: "June 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Brooklyn Academy of Music",
      address: "30 Lafayette Ave, Brooklyn, NY 11217",
      description: "Join us as we celebrate the achievements of our graduating students from all District 79 programs.",
      featured: true
    },
    {
      title: "P2G Graduation Celebration",
      date: "June 22, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "District 79 Administrative Office",
      address: "90-01 Sutphin Blvd, 2nd Floor, Jamaica, NY 11435",
      description: "Special ceremony for Pathways to Graduation students earning their High School Equivalency Diplomas.",
      featured: false
    },
    {
      title: "Adult Education Recognition",
      date: "June 29, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Queens Borough Hall",
      address: "120-55 Queens Blvd, Kew Gardens, NY 11424",
      description: "Celebrating adult learners who have completed their education and achieved their goals.",
      featured: false
    }
  ];

  const graduationRequirements = [
    {
      title: "Credit Requirements",
      description: "Complete all required credits for your program of study including core subjects and electives",
      icon: BookOpen,
      details: ["Minimum 44 credits for high school diploma", "Specific credit requirements by program", "Transfer credits accepted from other schools"]
    },
    {
      title: "Attendance",
      description: "Meet minimum attendance requirements as specified by your program",
      icon: Calendar,
      details: ["90% attendance rate required", "Excused absences with proper documentation", "Make-up opportunities available"]
    },
    {
      title: "Academic Performance",
      description: "Maintain satisfactory academic standing throughout your program",
      icon: Award,
      details: ["Passing grades in all required courses", "Minimum GPA requirements met", "Successful completion of assessments"]
    },
    {
      title: "Program Completion",
      description: "Successfully complete all program-specific requirements and assessments",
      icon: GraduationCap,
      details: ["All program requirements fulfilled", "Exit assessments completed", "Portfolio or project requirements met"]
    }
  ];

  const ceremonyDetails = [
    {
      title: "Ceremony Schedule",
      items: [
        "1:30 PM - Student arrival and check-in",
        "2:00 PM - Processional begins",
        "2:15 PM - Welcome and opening remarks",
        "2:30 PM - Student recognition and awards",
        "3:00 PM - Keynote address",
        "3:15 PM - Diploma presentation",
        "3:45 PM - Closing remarks",
        "4:00 PM - Reception and photo opportunities"
      ]
    },
    {
      title: "What to Bring",
      items: [
        "Graduation cap and gown (provided by District 79)",
        "Valid photo ID",
        "Invitation or confirmation email",
        "Camera or phone for photos",
        "Comfortable shoes for walking"
      ]
    },
    {
      title: "Guest Information",
      items: [
        "Each graduate may bring up to 4 guests",
        "Guest tickets will be provided with graduation packet",
        "Seating is first-come, first-served",
        "Live streaming available for those unable to attend",
        "Parking available at nearby lots (fees apply)"
      ]
    }
  ];

  const celebrationHighlights = [
    {
      title: "Student Achievements",
      description: "Recognition of academic excellence, perseverance, and personal growth",
      icon: Star,
      color: "yellow"
    },
    {
      title: "Family Celebration",
      description: "A special moment to share with family, friends, and supporters",
      icon: Heart,
      color: "red"
    },
    {
      title: "Photo Opportunities",
      description: "Professional photography and memorable moments captured",
      icon: Camera,
      color: "blue"
    },
    {
      title: "Future Planning",
      description: "Information about next steps, college, and career opportunities",
      icon: Users,
      color: "green"
    },
    {
      title: "Awards & Recognition",
      description: "Special honors for outstanding achievements and community service",
      icon: Trophy,
      color: "purple"
    },
    {
      title: "Alumni Network",
      description: "Join our growing network of successful District 79 graduates",
      icon: Sparkles,
      color: "indigo"
    }
  ];

  const photoGallery = [
    {
      title: "2023 Graduation Ceremony",
      description: "Celebrating our graduates' achievements and milestones",
      photos: 24,
      featured: true,
      thumbnail: "/api/placeholder/400/300",
      category: "Ceremony"
    },
    {
      title: "P2G Success Stories",
      description: "Pathways to Graduation students earning their diplomas",
      photos: 18,
      featured: false,
      thumbnail: "/api/placeholder/400/300",
      category: "P2G"
    },
    {
      title: "Adult Education Achievements",
      description: "Adult learners completing their educational goals",
      photos: 22,
      featured: false,
      thumbnail: "/api/placeholder/400/300",
      category: "Adult Ed"
    },
    {
      title: "Family Celebrations",
      description: "Graduates sharing their success with loved ones",
      photos: 31,
      featured: false,
      thumbnail: "/api/placeholder/400/300",
      category: "Family"
    },
    {
      title: "Awards & Recognition",
      description: "Special honors and academic achievements",
      photos: 16,
      featured: false,
      thumbnail: "/api/placeholder/400/300",
      category: "Awards"
    },
    {
      title: "Graduation Receptions",
      description: "Post-ceremony celebrations and networking",
      photos: 28,
      featured: false,
      thumbnail: "/api/placeholder/400/300",
      category: "Reception"
    }
  ];

  const graduationVideos = [
    {
      title: "2023 Graduation Highlights",
      description: "Watch the best moments from our graduation ceremony",
      duration: "3:45",
      thumbnail: "/api/placeholder/400/225",
      featured: true
    },
    {
      title: "Student Success Stories",
      description: "Hear from our graduates about their journey",
      duration: "4:20",
      thumbnail: "/api/placeholder/400/225",
      featured: false
    },
    {
      title: "Graduation Day Preparation",
      description: "Behind the scenes of graduation day",
      duration: "2:30",
      thumbnail: "/api/placeholder/400/225",
      featured: false
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
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Graduation Celebration
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Celebrating the achievements and success of our District 79 graduates as they embark on their next chapter.
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

      {/* Graduation Information */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Calendar className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">2024 Graduation Ceremonies</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us in celebrating the hard work and dedication of our graduating students across all District 79 programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {graduationInfo.map((ceremony, index) => {
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden ${ceremony.featured ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="p-8">
                    {ceremony.featured && (
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center mb-4 w-fit">
                        <Star className="h-4 w-4 mr-1" />
                        Featured Ceremony
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {ceremony.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-br ${colorScheme.bg} p-2 rounded-lg`}>
                          <Calendar className={`h-5 w-5 ${colorScheme.icon}`} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Date</p>
                          <p className="text-gray-600">{ceremony.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-br ${colorScheme.bg} p-2 rounded-lg`}>
                          <Clock className={`h-5 w-5 ${colorScheme.icon}`} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Time</p>
                          <p className="text-gray-600">{ceremony.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-br ${colorScheme.bg} p-2 rounded-lg`}>
                          <MapPin className={`h-5 w-5 ${colorScheme.icon}`} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Location</p>
                          <p className="text-gray-600">{ceremony.location}</p>
                          <p className="text-gray-500 text-sm">{ceremony.address}</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {ceremony.description}
                    </p>
                    
                    <button className="group/btn text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Our Ceremonies</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our graduation ceremonies are special celebrations of the hard work, dedication, and achievements of our students. 
                  It&apos;s a time to recognize not just academic success, but the personal growth and resilience that brought each 
                  graduate to this milestone moment.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Each ceremony includes student recognition, keynote address, diploma presentation, and a reception where 
                  graduates can celebrate with family, friends, and the District 79 community.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Professional ceremony with formal recognition</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Individual diploma presentation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Photo opportunities with family and friends</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Reception with refreshments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduation Requirements */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Graduation Requirements</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding what it takes to earn your diploma and participate in graduation ceremonies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {graduationRequirements.map((requirement, index) => {
              const IconComponent = requirement.icon;
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-600' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`bg-gradient-to-br ${colorScheme.bg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-10 w-10 ${colorScheme.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {requirement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{requirement.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {requirement.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className={`${colorScheme.accent} w-2 h-2 rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ceremony Details */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
              <Clock className="h-10 w-10 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ceremony Information</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about the graduation ceremony and how to prepare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ceremonyDetails.map((detail, index) => {
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 group-hover:text-blue-600 transition-colors">
                    {detail.title}
                  </h3>
                  <ul className="space-y-4">
                    {detail.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className={`${colorScheme.accent} w-2 h-2 rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Celebration Highlights */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
              <Sparkles className="h-10 w-10 text-yellow-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Celebration Highlights</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What makes our graduation ceremony a special and memorable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {celebrationHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              const colors = {
                yellow: { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-600' },
                red: { bg: 'from-red-100 to-red-200', icon: 'text-red-600', accent: 'bg-red-600' },
                blue: { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                green: { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                purple: { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' },
                indigo: { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', accent: 'bg-indigo-600' }
              };
              const colorScheme = colors[highlight.color as keyof typeof colors];
              
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8 text-center">
                  <div className={`bg-gradient-to-br ${colorScheme.bg} w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-10 w-10 ${colorScheme.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full mb-6">
              <Camera className="h-10 w-10 text-pink-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Graduation Memories</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Relive the special moments and celebrate the achievements of our graduates through our photo galleries and videos.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Photo Galleries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoGallery.map((gallery, index) => {
                const colors = [
                  { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600', badge: 'bg-blue-100 text-blue-800' },
                  { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600', badge: 'bg-green-100 text-green-800' },
                  { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600', badge: 'bg-purple-100 text-purple-800' },
                  { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-600', badge: 'bg-yellow-100 text-yellow-800' },
                  { bg: 'from-red-100 to-red-200', icon: 'text-red-600', accent: 'bg-red-600', badge: 'bg-red-100 text-red-800' },
                  { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', accent: 'bg-indigo-600', badge: 'bg-indigo-100 text-indigo-800' }
                ];
                const colorScheme = colors[index % colors.length];
                
                return (
                  <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden ${gallery.featured ? 'ring-2 ring-pink-500' : ''}`}>
                    <div className="relative">
                      <div className="h-64 bg-gray-200 flex items-center justify-center">
                        <Image className="h-16 w-16 text-gray-400" />
                      </div>
                      {gallery.featured && (
                        <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Featured
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`${colorScheme.accent} text-white rounded-full p-4`}>
                            <Eye className="h-8 w-8" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`${colorScheme.badge} px-3 py-1 rounded-full text-xs font-bold`}>
                          {gallery.category}
                        </span>
                        <span className="text-gray-500 text-sm font-medium">
                          {gallery.photos} photos
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                        {gallery.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {gallery.description}
                      </p>
                      <button className="group/btn text-pink-600 hover:text-pink-800 font-semibold flex items-center transition-colors">
                        View Gallery
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Gallery */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Graduation Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {graduationVideos.map((video, index) => {
                const colors = [
                  { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                  { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                  { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' }
                ];
                const colorScheme = colors[index % colors.length];
                
                return (
                  <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden ${video.featured ? 'ring-2 ring-blue-500' : ''}`}>
                    <div className="relative">
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <Image className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className={`${colorScheme.accent} text-white rounded-full p-4 hover:scale-110 transition-all duration-300 shadow-lg`}>
                          <Play className="h-8 w-8" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {video.duration}
                      </div>
                      {video.featured && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Phone className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Questions About Graduation?</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team is here to help with any questions about graduation requirements, ceremony details, or next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-10 text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <a href="mailto:District79@schools.nyc.gov" className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-semibold">
                District79@schools.nyc.gov
              </a>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-10 text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <a href="tel:718-557-2590" className="text-green-600 hover:text-green-800 transition-colors text-lg font-semibold">
                (718) 557-2590
              </a>
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
            <Trophy className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Congratulations, Graduates!
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your hard work and dedication have brought you to this moment. We&apos;re proud of your achievements and excited for your future.
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
              href="/resources"
              className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Resources</span>
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
