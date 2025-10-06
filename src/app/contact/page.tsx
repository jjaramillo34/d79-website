'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, CheckCircle, Star, Heart, Award, Users, BookOpen, Shield, Zap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      title: "District 79 Administrative Office",
      address: "90-01 Sutphin Blvd, 2Fl\nJamaica, NY 11435",
      phone: "718-557-2590",
      email: "District79@schools.nyc.gov",
      hours: "8:00 a.m. – 4:00 p.m.",
      icon: MapPin,
      color: "blue"
    },
    {
      title: "Enrollment & Admissions",
      address: "90-01 Sutphin Blvd, 2Fl\nJamaica, NY 11435",
      phone: "718-557-2590",
      email: "District79@schools.nyc.gov",
      hours: "8:00 a.m. – 4:00 p.m.",
      icon: Users,
      color: "green"
    },
    {
      title: "Student Support Services",
      address: "90-01 Sutphin Blvd, 2Fl\nJamaica, NY 11435",
      phone: "718-557-2590",
      email: "District79@schools.nyc.gov",
      hours: "8:00 a.m. – 4:00 p.m.",
      icon: Heart,
      color: "purple"
    }
  ];

  const departments = [
    { name: "General Information", email: "District79@schools.nyc.gov", phone: "718-557-2590", icon: BookOpen, color: "blue" },
    { name: "Enrollment & Admissions", email: "District79@schools.nyc.gov", phone: "718-557-2590", icon: Users, color: "green" },
    { name: "Academic Support", email: "District79@schools.nyc.gov", phone: "718-557-2590", icon: Award, color: "purple" },
    { name: "Career Counseling", email: "District79@schools.nyc.gov", phone: "718-557-2590", icon: Star, color: "yellow" },
    { name: "Student Services", email: "District79@schools.nyc.gov", phone: "718-557-2590", icon: Heart, color: "red" },
    { name: "Technology Support", email: "District79@schools.nyc.gov", phone: "718-557-2590", icon: Zap, color: "indigo" }
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
              <Phone className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us. We&apos;re here to help you with any questions about our programs and services.
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

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Have questions about our programs? Want to schedule a visit? Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="either">Either</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Tell us more about your question or how we can help you..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  We&apos;re here to help! Reach out to us through any of the methods below, or visit us at one of our locations.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const colors = {
                    blue: { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                    green: { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                    purple: { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' }
                  };
                  const colorScheme = colors[info.color as keyof typeof colors];
                  
                  return (
                    <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`bg-gradient-to-br ${colorScheme.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-6 w-6 ${colorScheme.icon}`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                          <span className="text-gray-600 whitespace-pre-line">{info.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-gray-400 mr-3" />
                          <a href={`tel:${info.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                            {info.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-gray-400 mr-3" />
                          <a href={`mailto:${info.email}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                            {info.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-gray-400 mr-3" />
                          <span className="text-gray-600 font-medium">{info.hours}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
              <Users className="h-10 w-10 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Department Contacts</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Need to reach a specific department? Here are direct contacts for different areas of our organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              const colors = {
                blue: { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'bg-blue-600' },
                green: { bg: 'from-green-100 to-green-200', icon: 'text-green-600', accent: 'bg-green-600' },
                purple: { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600', accent: 'bg-purple-600' },
                yellow: { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-600' },
                red: { bg: 'from-red-100 to-red-200', icon: 'text-red-600', accent: 'bg-red-600' },
                indigo: { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600', accent: 'bg-indigo-600' }
              };
              const colorScheme = colors[dept.color as keyof typeof colors];
              
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-br ${colorScheme.bg} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${colorScheme.icon}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-3" />
                      <a href={`tel:${dept.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                        {dept.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-3" />
                      <a href={`mailto:${dept.email}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
              <MapPin className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Visit Us</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Come see our facilities and meet our staff. We&apos;d love to show you around!
            </p>
          </div>

          {/* Placeholder for map - in a real application, you would integrate with Google Maps */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Map Coming Soon</h3>
                <p className="text-gray-600 text-lg mb-2">We&apos;re working on integrating an interactive map</p>
                <p className="text-gray-500">to help you find our locations throughout NYC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-8">
            <Shield className="h-10 w-10 text-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            For urgent matters outside of regular business hours, please use our emergency contact line.
          </p>
          <div className="bg-white p-12 rounded-2xl shadow-2xl inline-block border border-red-200">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Emergency Hotline</h3>
            <a href="tel:718-557-2590" className="text-red-600 font-bold text-4xl hover:text-red-700 transition-colors block mb-4">
              (718) 557-2590
            </a>
            <p className="text-gray-600 text-lg">Available 24/7 for urgent student matters</p>
          </div>
        </div>
      </section>
    </div>
  );
}

