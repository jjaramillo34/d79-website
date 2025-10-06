import { MapPin, Phone, Mail, Clock, Car, Bus, Users, Wifi, ArrowRight, Star, CheckCircle, Navigation } from 'lucide-react';

export default function Locations() {
  const locations = [
    {
      name: "District 79 Administrative Office",
      address: "90-01 Sutphin Blvd, 2nd Floor, Jamaica, NY 11435",
      phone: "(718) 557-2590",
      email: "District79@schools.nyc.gov",
      hours: "Monday - Friday: 8:00 AM - 4:00 PM",
      programs: ["Administrative Services", "Program Information", "Enrollment Support"],
      amenities: ["Parking", "Public Transportation", "WiFi", "Reception Area", "Meeting Rooms"],
      description: "Our main administrative office providing comprehensive support and information for all District 79 programs and services."
    },
    {
      name: "Pathways to Graduation (P2G) - Manhattan",
      address: "333 7th Avenue, 12th Floor, New York, NY 10001",
      phone: "(212) 356-8000",
      email: "p2g.manhattan@schools.nyc.gov",
      hours: "Monday - Friday: 8:30 AM - 4:30 PM",
      programs: ["Pathways to Graduation", "High School Equivalency", "Career Preparation"],
      amenities: ["Public Transportation", "WiFi", "Computer Lab", "Study Areas", "Counseling Services"],
      description: "Full-time free program for students age 17-21 to earn their High School Equivalency Diploma with comprehensive support services."
    },
    {
      name: "Adult Education - Brooklyn",
      address: "475 Nostrand Avenue, Brooklyn, NY 11216",
      phone: "(718) 636-5000",
      email: "adultedu.brooklyn@schools.nyc.gov",
      hours: "Monday - Friday: 9:00 AM - 9:00 PM, Saturday: 9:00 AM - 3:00 PM",
      programs: ["Adult Basic Education", "ESOL", "Career & Technical Education", "High School Equivalency"],
      amenities: ["Parking", "Public Transportation", "WiFi", "Childcare", "Computer Lab", "Library"],
      description: "Comprehensive adult education services including ABE, CTE, HSE preparation, and ESOL classes for students 21 and older."
    },
    {
      name: "LYFE - Living For The Young Family",
      address: "1230 Zerega Avenue, Bronx, NY 10462",
      phone: "(718) 828-4000",
      email: "lyfe.bronx@schools.nyc.gov",
      hours: "Monday - Friday: 8:00 AM - 4:00 PM",
      programs: ["Early Childhood Education", "Parent Support", "Academic Guidance", "Counseling Services"],
      amenities: ["Childcare", "Public Transportation", "WiFi", "Play Areas", "Parent Resource Center"],
      description: "Free early childhood education for children of student parents, enabling parents to complete their education while providing quality childcare."
    },
    {
      name: "Young Adult Borough Centers (YABC) - Queens",
      address: "28-11 Queens Plaza North, Long Island City, NY 11101",
      phone: "(718) 784-6000",
      email: "yabc.queens@schools.nyc.gov",
      hours: "Monday - Friday: 2:00 PM - 8:00 PM",
      programs: ["Alternative High School", "Credit Recovery", "Evening Programs", "Career Exploration"],
      amenities: ["Public Transportation", "WiFi", "Computer Lab", "Study Rooms", "Career Center"],
      description: "Afternoon and evening programs for high school students who need flexible scheduling due to work or family responsibilities."
    },
    {
      name: "Judith S. Kaye High School",
      address: "321 E 96th Street, New York, NY 10128",
      phone: "(212) 876-8000",
      email: "jsk@schools.nyc.gov",
      hours: "Monday - Friday: 8:00 AM - 3:00 PM",
      programs: ["Transfer High School", "Career & Technical Education", "Regents Diploma", "High School Equivalency"],
      amenities: ["Public Transportation", "WiFi", "Workshop Spaces", "Career Training Labs", "Library"],
      description: "Transfer high school co-located with Co-Op Tech, offering Regents/HSE diplomas and career certificates in cutting-edge trade areas."
    },
    {
      name: "ReStart Academy - Staten Island",
      address: "715 Ocean Terrace, Staten Island, NY 10301",
      phone: "(718) 420-2000",
      email: "restart.statenisland@schools.nyc.gov",
      hours: "Monday - Friday: 8:30 AM - 3:30 PM",
      programs: ["Alternative Education", "Transitional Services", "Credit Recovery", "Support Services"],
      amenities: ["Parking", "Public Transportation", "WiFi", "Counseling Center", "Study Areas"],
      description: "Alternative education program providing transitional services for students ages 13-21 in temporary or involuntary settings."
    },
    {
      name: "Passages Academy - Rikers Island",
      address: "East River Academy, Rikers Island, NY 10474",
      phone: "(718) 546-8000",
      email: "passages.rikers@schools.nyc.gov",
      hours: "Monday - Friday: 8:00 AM - 3:00 PM",
      programs: ["Academic Services", "HSE Preparation", "Transition Planning", "Counseling"],
      amenities: ["Academic Materials", "Computer Access", "Library Services", "Counseling Support"],
      description: "Educational services for students 18+ detained or serving time, providing HSE preparation and academic support within the justice system."
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
              <MapPin className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Locations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find the District 79 location nearest you. We have multiple campuses throughout the region to serve our students.
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

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Navigation className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find Us</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              All our locations are easily accessible by public transportation and offer convenient parking.
            </p>
          </div>

          {/* Enhanced Map Placeholder */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 flex items-center justify-center mb-12 shadow-2xl border border-gray-300">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Interactive Map Coming Soon</h3>
              <p className="text-gray-600 text-lg mb-2">We're working on integrating an interactive map</p>
              <p className="text-gray-500">to help you find our locations and get directions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Campus Locations</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each location offers unique programs and services tailored to meet the needs of our students.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => {
              const colors = [
                { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-800', accent: 'bg-blue-600' },
                { bg: 'from-green-100 to-green-200', icon: 'text-green-600', badge: 'bg-green-100 text-green-800', accent: 'bg-green-600' },
                { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-800', accent: 'bg-purple-600' },
                { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', badge: 'bg-yellow-100 text-yellow-800', accent: 'bg-yellow-600' },
                { bg: 'from-red-100 to-red-200', icon: 'text-red-600', badge: 'bg-red-100 text-red-800', accent: 'bg-red-600' },
                { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-800', accent: 'bg-indigo-600' },
                { bg: 'from-pink-100 to-pink-200', icon: 'text-pink-600', badge: 'bg-pink-100 text-pink-800', accent: 'bg-pink-600' },
                { bg: 'from-teal-100 to-teal-200', icon: 'text-teal-600', badge: 'bg-teal-100 text-teal-800', accent: 'bg-teal-600' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{location.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{location.description}</p>
                      </div>
                      <div className={`bg-gradient-to-br ${colorScheme.bg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <MapPin className={`h-8 w-8 ${colorScheme.icon}`} />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-gray-600">
                        <MapPin className={`h-5 w-5 ${colorScheme.icon} mr-3`} />
                        <span className="font-medium">{location.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className={`h-5 w-5 ${colorScheme.icon} mr-3`} />
                        <a href={`tel:${location.phone}`} className="hover:text-blue-600 transition-colors font-medium">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className={`h-5 w-5 ${colorScheme.icon} mr-3`} />
                        <a href={`mailto:${location.email}`} className="hover:text-blue-600 transition-colors font-medium">
                          {location.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className={`h-5 w-5 ${colorScheme.icon} mr-3`} />
                        <span className="font-medium">{location.hours}</span>
                      </div>
                    </div>

                    {/* Programs */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Users className={`h-5 w-5 ${colorScheme.icon} mr-2`} />
                        Programs Offered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.programs.map((program, programIndex) => (
                          <span key={programIndex} className={`${colorScheme.badge} px-4 py-2 rounded-full text-sm font-medium`}>
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Wifi className={`h-5 w-5 ${colorScheme.icon} mr-2`} />
                        Campus Amenities
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {location.amenities.map((amenity, amenityIndex) => (
                          <div key={amenityIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className={`h-4 w-4 ${colorScheme.icon} mr-2`} />
                            <span className="font-medium">{amenity}</span>
                          </div>
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

      {/* Transportation Information */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Car className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Getting Here</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We make it easy to get to our campuses with multiple transportation options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Car className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Driving</h3>
              <p className="text-gray-600 leading-relaxed">
                Free parking is available at all our locations. Each campus has designated parking areas for students and visitors.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bus className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Public Transit</h3>
              <p className="text-gray-600 leading-relaxed">
                All campuses are accessible by public transportation. Bus stops are located within walking distance of each location.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Carpooling</h3>
              <p className="text-gray-600 leading-relaxed">
                We encourage carpooling and can help connect students and families for shared transportation arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
            <Phone className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Need Help Finding Us?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our staff is here to help you find the right location and program for your needs.
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

