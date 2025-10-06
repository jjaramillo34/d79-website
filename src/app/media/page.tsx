import { Play, Download, Calendar, User, Share2, FileText, Image, Video, ArrowRight, Star, Camera, Newspaper, BookOpen, Award, Heart, Users, Mail } from 'lucide-react';

export default function Media() {
  const newsArticles = [
    {
      title: "District 79 Celebrates Record Graduation Rates",
      date: "December 15, 2024",
      author: "Dr. Sarah Johnson",
      excerpt: "This year, District 79 Alternative Education achieved its highest graduation rate in history, with 89% of students successfully completing their programs and earning their diplomas.",
      category: "News",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      title: "New Career & Technical Education Program Launches",
      date: "November 28, 2024",
      author: "Michael Rodriguez",
      excerpt: "Students can now earn industry certifications in high-demand fields including healthcare, technology, and skilled trades while completing their high school education.",
      category: "Programs",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      title: "Student Success Story: From Dropout to College Graduate",
      date: "November 10, 2024",
      author: "Jennifer Chen",
      excerpt: "Maria Rodriguez shares her inspiring journey from leaving high school to earning a college degree with the help of District 79's Pathways to Graduation program.",
      category: "Success Stories",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      title: "Adult Education Program Expands to Serve More Students",
      date: "October 22, 2024",
      author: "Dr. Patricia Williams",
      excerpt: "District 79's Adult Education program has expanded its offerings to include more ESOL classes, career training, and flexible scheduling options for working adults.",
      category: "Programs",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      title: "LYFE Program Celebrates 10 Years of Supporting Student Parents",
      date: "October 5, 2024",
      author: "Lisa Thompson",
      excerpt: "The Living For The Young Family program marks a decade of providing free childcare and support services to help student parents complete their education.",
      category: "Announcements",
      readTime: "3 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      title: "Judith S. Kaye High School Partners with Local Industries",
      date: "September 18, 2024",
      author: "Robert Martinez",
      excerpt: "New partnerships with local businesses provide students with real-world experience and job placement opportunities in high-demand career fields.",
      category: "Partnerships",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const videos = [
    {
      title: "Welcome to District 79 Alternative Education",
      description: "Learn about our mission, programs, and how we help students succeed in their unique learning journey.",
      duration: "3:45",
      thumbnail: "/api/placeholder/400/225",
      featured: true
    },
    {
      title: "Student Success Stories",
      description: "Hear from our students about their experiences, challenges overcome, and achievements at District 79.",
      duration: "4:20",
      thumbnail: "/api/placeholder/400/225",
      featured: false
    },
    {
      title: "Pathways to Graduation Program Overview",
      description: "Discover how our P2G program helps students age 17-21 earn their High School Equivalency Diploma.",
      duration: "5:30",
      thumbnail: "/api/placeholder/400/225",
      featured: false
    },
    {
      title: "Adult Education Success Stories",
      description: "Meet adult learners who transformed their lives through our comprehensive adult education programs.",
      duration: "6:15",
      thumbnail: "/api/placeholder/400/225",
      featured: false
    },
    {
      title: "LYFE Program: Supporting Student Parents",
      description: "Learn how our Living For The Young Family program provides childcare and support for student parents.",
      duration: "4:45",
      thumbnail: "/api/placeholder/400/225",
      featured: false
    },
    {
      title: "Career & Technical Education at JSK",
      description: "Explore the cutting-edge career training programs at Judith S. Kaye High School.",
      duration: "7:20",
      thumbnail: "/api/placeholder/400/225",
      featured: false
    }
  ];

  const documents = [
    {
      title: "2024 Annual Report",
      description: "Comprehensive overview of our programs, achievements, and student outcomes across all District 79 locations.",
      type: "PDF",
      size: "2.3 MB",
      icon: FileText,
      featured: true
    },
    {
      title: "Program Brochure",
      description: "Detailed information about all our educational programs and services including P2G, Adult Education, and LYFE.",
      type: "PDF",
      size: "1.8 MB",
      icon: FileText,
      featured: false
    },
    {
      title: "Application Form",
      description: "Download and complete the application form to get started with your educational journey.",
      type: "PDF",
      size: "245 KB",
      icon: FileText,
      featured: false
    },
    {
      title: "Student Handbook",
      description: "Complete guide to policies, procedures, and expectations for all District 79 students.",
      type: "PDF",
      size: "3.1 MB",
      icon: FileText,
      featured: false
    },
    {
      title: "Pathways to Graduation Guide",
      description: "Everything you need to know about our P2G program for students age 17-21.",
      type: "PDF",
      size: "1.2 MB",
      icon: BookOpen,
      featured: false
    },
    {
      title: "Adult Education Catalog",
      description: "Complete catalog of adult education programs including ABE, CTE, and ESOL classes.",
      type: "PDF",
      size: "2.1 MB",
      icon: Users,
      featured: false
    },
    {
      title: "LYFE Program Information",
      description: "Information about our free childcare program for student parents.",
      type: "PDF",
      size: "890 KB",
      icon: Heart,
      featured: false
    },
    {
      title: "Career & Technical Education Guide",
      description: "Explore career training opportunities and industry partnerships at JSK.",
      type: "PDF",
      size: "1.5 MB",
      icon: Award,
      featured: false
    }
  ];

  const photoGallery = [
    { title: "Graduation Ceremony 2024", count: "24 photos", thumbnail: "/api/placeholder/300/200", featured: true },
    { title: "P2G Program Highlights", count: "18 photos", thumbnail: "/api/placeholder/300/200", featured: false },
    { title: "Adult Education Success Stories", count: "32 photos", thumbnail: "/api/placeholder/300/200", featured: false },
    { title: "LYFE Program Activities", count: "15 photos", thumbnail: "/api/placeholder/300/200", featured: false },
    { title: "Career & Technical Education", count: "28 photos", thumbnail: "/api/placeholder/300/200", featured: false },
    { title: "Student Life & Activities", count: "42 photos", thumbnail: "/api/placeholder/300/200", featured: false },
    { title: "Community Events", count: "19 photos", thumbnail: "/api/placeholder/300/200", featured: false },
    { title: "Awards & Recognition", count: "12 photos", thumbnail: "/api/placeholder/300/200", featured: false }
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
              <Camera className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Media Center
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, videos, photos, and resources from District 79 Alternative Education.
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

      {/* News Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Newspaper className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest News</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest achievements, program updates, and student success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => {
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-800' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', badge: 'bg-green-100 text-green-800' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-800' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', badge: 'bg-yellow-100 text-yellow-800' },
                { bg: 'from-red-100 to-red-200', icon: 'text-red-600', badge: 'bg-red-100 text-red-800' },
                { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-800' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <article key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden ${article.featured ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="relative">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <Image className="h-12 w-12 text-gray-400" />
                    </div>
                    {article.featured && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${colorScheme.badge} px-4 py-2 rounded-full text-sm font-medium`}>
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm font-medium">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span className="font-medium">{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{article.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="group/btn text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
              <Video className="h-10 w-10 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Videos</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch our videos to learn more about our programs and hear from our students and staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => {
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
                <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden ${video.featured ? 'ring-2 ring-purple-500' : ''}`}>
                  <div className="relative">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <Video className="h-12 w-12 text-gray-400" />
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
                      <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resources & Documents</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download important documents, reports, and resources to learn more about our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documents.map((doc, index) => {
              const IconComponent = doc.icon;
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-800' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', badge: 'bg-green-100 text-green-800' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-800' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', badge: 'bg-yellow-100 text-yellow-800' },
                { bg: 'from-red-100 to-red-200', icon: 'text-red-600', badge: 'bg-red-100 text-red-800' },
                { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-800' },
                { bg: 'from-pink-100 to-pink-200', icon: 'text-pink-600', badge: 'bg-pink-100 text-pink-800' },
                { bg: 'from-teal-100 to-teal-200', icon: 'text-teal-600', badge: 'bg-teal-100 text-teal-800' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 p-8 ${doc.featured ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-br ${colorScheme.bg} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${colorScheme.icon}`} />
                    </div>
                    <div>
                      <span className={`${colorScheme.badge} px-3 py-1 rounded-full text-xs font-bold`}>
                        {doc.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-medium">{doc.size}</span>
                    <button className="group/btn text-blue-600 hover:text-blue-800 font-semibold flex items-center text-sm transition-colors">
                      <Download className="h-4 w-4 mr-2 group-hover/btn:translate-y-1 transition-transform duration-300" />
                      Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
              <Camera className="h-10 w-10 text-yellow-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take a look at our campus life, events, and student activities through our photo galleries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photoGallery.map((gallery, index) => {
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-600' },
                { bg: 'from-red-100 to-red-200', icon: 'text-red-600', accent: 'bg-red-600' },
                { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', accent: 'bg-indigo-600' },
                { bg: 'from-pink-100 to-pink-200', icon: 'text-pink-600', accent: 'bg-pink-600' },
                { bg: 'from-teal-100 to-teal-200', icon: 'text-teal-600', accent: 'bg-teal-600' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden ${gallery.featured ? 'ring-2 ring-yellow-500' : ''}`}>
                  <div className="relative">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <Image className="h-12 w-12 text-gray-400" />
                    </div>
                    {gallery.featured && (
                      <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`${colorScheme.accent} text-white rounded-full p-3`}>
                          <Camera className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {gallery.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {gallery.count}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
            <Mail className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stay Connected
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Subscribe to our newsletter to receive the latest news, updates, and success stories directly in your inbox.
          </p>
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 mb-12">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            />
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 inline-flex items-center justify-center">
              <span>Subscribe</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Weekly Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Success Stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Program Updates</span>
            </div>
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

