'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, User, Calendar, MapPin, GraduationCap, Heart, Briefcase, ArrowRight } from 'lucide-react';

interface FormData {
  age: string;
  education: string;
  workStatus: string;
  familyStatus: string;
  goals: string[];
  location: string;
  schedule: string;
  support: string[];
}

interface Program {
  name: string;
  description: string;
  eligibility: string;
  link: string;
  icon: any;
  category: string;
}

const SmartApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    age: '',
    education: '',
    workStatus: '',
    familyStatus: '',
    goals: [],
    location: '',
    schedule: '',
    support: []
  });
  const [recommendedPrograms, setRecommendedPrograms] = useState<Program[]>([]);
  const [showResults, setShowResults] = useState(false);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateRecommendations = () => {
    const programs: Program[] = [];
    
    // Age-based recommendations
    if (parseInt(formData.age) < 21) {
      programs.push(
        {
          name: "Pathways to Graduation (P2G)",
          description: "Full-time free program for students age 17-21 to earn High School Equivalency Diploma.",
          eligibility: "Ages 17-21, no high school diploma",
          link: "/under21",
          icon: GraduationCap,
          category: "Under 21 Programs"
        },
        {
          name: "Young Adult Borough Centers (YABCs)",
          description: "Afternoon and evening programs for students behind in credits or with adult responsibilities.",
          eligibility: "High school students with credit deficiencies",
          link: "/under21",
          icon: Calendar,
          category: "Under 21 Programs"
        }
      );

      if (formData.familyStatus === 'parent') {
        programs.push({
          name: "LYFE-Living For The Young Family",
          description: "Free early childhood education for children of student parents with supportive services.",
          eligibility: "Student parents with children",
          link: "/under21",
          icon: Heart,
          category: "Under 21 Programs"
        });
      }

      if (formData.goals.includes('career')) {
        programs.push({
          name: "Cooperative Technical Education",
          description: "Half-day vocational program with hands-on training in high-demand trade areas.",
          eligibility: "Ages 17-21, interested in technical careers",
          link: "/under21",
          icon: Briefcase,
          category: "Under 21 Programs"
        });
      }
    } else {
      programs.push({
        name: "Adult Education",
        description: "900+ tuition-free classes including ABE, CTE, HSE preparation, and ESOL programs.",
        eligibility: "Ages 21+, no U.S. high school diploma or equivalency",
        link: "/above21",
        icon: GraduationCap,
        category: "Adult Education"
      });
    }

    // Special circumstances
    if (formData.support.includes('mental-health')) {
      programs.push({
        name: "Mental Health Support Services",
        description: "Comprehensive counseling and mental health resources available through District 79.",
        eligibility: "All District 79 students",
        link: "/resources",
        icon: Heart,
        category: "Support Services"
      });
    }

    if (formData.support.includes('substance-abuse')) {
      programs.push({
        name: "Substance Abuse Resources",
        description: "City-wide substance abuse treatment and support services.",
        eligibility: "Students in need of substance abuse support",
        link: "/resources",
        icon: Heart,
        category: "Support Services"
      });
    }

    setRecommendedPrograms(programs);
    setShowResults(true);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      age: '',
      education: '',
      workStatus: '',
      familyStatus: '',
      goals: [],
      location: '',
      schedule: '',
      support: []
    });
    setRecommendedPrograms([]);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border border-green-100">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-pulse">
            <Check className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🎉 Perfect Match!</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Based on your responses, we've found the programs that best match your needs. 
            Each recommendation is tailored to your specific situation and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {recommendedPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{program.name}</h3>
                      <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {program.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-700"><strong className="text-gray-900">Eligibility:</strong> {program.eligibility}</p>
                    </div>
                    <a
                      href={program.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-1 transition-transform duration-200"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetForm}
              className="bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Over
            </button>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 inline-flex items-center shadow-lg hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Need help choosing? Our team is here to guide you through your options.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto border border-blue-100">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
          <User className="h-10 w-10 text-blue-600" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Program</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Take our quick assessment to discover which District 79 programs are right for you. 
          Get personalized recommendations in just 2 minutes!
        </p>
        
        {/* Enhanced Progress Bar */}
        <div className="relative mb-6">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm font-medium text-gray-600">Step {currentStep}</span>
            <span className="text-sm font-medium text-blue-600">{Math.round((currentStep / 6) * 100)}% Complete</span>
          </div>
        </div>
        
        {/* Step Indicators */}
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div
              key={step}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                step <= currentStep 
                  ? 'bg-blue-600 scale-110' 
                  : step === currentStep + 1 
                    ? 'bg-blue-300' 
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step 1: Age */}
      {currentStep === 1 && (
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 flex items-center mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            What is your age?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { value: '16', label: '16 years old' },
              { value: '17', label: '17 years old' },
              { value: '18', label: '18 years old' },
              { value: '19', label: '19 years old' },
              { value: '20', label: '20 years old' },
              { value: '21', label: '21 years old' },
              { value: '22-30', label: '22-30 years old' },
              { value: '31-40', label: '31-40 years old' },
              { value: '41+', label: '41+ years old' }
            ].map((option) => (
              <label key={option.value} className="group cursor-pointer">
                <input
                  type="radio"
                  name="age"
                  value={option.value}
                  checked={formData.age === option.value}
                  onChange={(e) => updateFormData('age', e.target.value)}
                  className="sr-only"
                />
                <div className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  formData.age === option.value 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-25'
                }`}>
                  <span className="font-medium">{option.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Education Level */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
            What is your current education level?
          </h3>
          <div className="space-y-3">
            {[
              { value: 'no-diploma', label: 'No high school diploma' },
              { value: 'some-high-school', label: 'Some high school completed' },
              { value: 'high-school', label: 'High school diploma' },
              { value: 'some-college', label: 'Some college completed' },
              { value: 'college', label: 'College degree' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="education"
                  value={option.value}
                  checked={formData.education === option.value}
                  onChange={(e) => updateFormData('education', e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Work Status */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <Briefcase className="h-6 w-6 mr-2 text-blue-600" />
            What is your current work status?
          </h3>
          <div className="space-y-3">
            {[
              { value: 'not-working', label: 'Not currently working' },
              { value: 'part-time', label: 'Working part-time' },
              { value: 'full-time', label: 'Working full-time' },
              { value: 'looking', label: 'Looking for work' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="workStatus"
                  value={option.value}
                  checked={formData.workStatus === option.value}
                  onChange={(e) => updateFormData('workStatus', e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Family Status */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <Heart className="h-6 w-6 mr-2 text-blue-600" />
            Do you have children or family responsibilities?
          </h3>
          <div className="space-y-3">
            {[
              { value: 'no-children', label: 'No children' },
              { value: 'parent', label: 'I am a parent' },
              { value: 'caregiver', label: 'I care for family members' },
              { value: 'both', label: 'I am a parent and caregiver' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="familyStatus"
                  value={option.value}
                  checked={formData.familyStatus === option.value}
                  onChange={(e) => updateFormData('familyStatus', e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Goals */}
      {currentStep === 5 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
            What are your main goals? (Select all that apply)
          </h3>
          <div className="space-y-3">
            {[
              { value: 'diploma', label: 'Earn a high school diploma' },
              { value: 'equivalency', label: 'Get high school equivalency (GED/HSE)' },
              { value: 'career', label: 'Learn job skills or get career training' },
              { value: 'college', label: 'Prepare for college' },
              { value: 'english', label: 'Improve English language skills' },
              { value: 'basic-skills', label: 'Improve basic reading, writing, or math skills' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.goals.includes(option.value)}
                  onChange={(e) => {
                    const newGoals = e.target.checked
                      ? [...formData.goals, option.value]
                      : formData.goals.filter(goal => goal !== option.value);
                    updateFormData('goals', newGoals);
                  }}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Step 6: Support Needs */}
      {currentStep === 6 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <Heart className="h-6 w-6 mr-2 text-blue-600" />
            Do you need any of these support services? (Select all that apply)
          </h3>
          <div className="space-y-3">
            {[
              { value: 'childcare', label: 'Childcare services' },
              { value: 'mental-health', label: 'Mental health counseling' },
              { value: 'substance-abuse', label: 'Substance abuse support' },
              { value: 'housing', label: 'Housing assistance' },
              { value: 'transportation', label: 'Transportation help' },
              { value: 'none', label: 'I do not need additional support services' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.support.includes(option.value)}
                  onChange={(e) => {
                    const newSupport = e.target.checked
                      ? [...formData.support, option.value]
                      : formData.support.filter(support => support !== option.value);
                    updateFormData('support', newSupport);
                  }}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Previous
        </button>
        
        {currentStep < 6 ? (
          <button
            onClick={nextStep}
            disabled={
              (currentStep === 1 && !formData.age) ||
              (currentStep === 2 && !formData.education) ||
              (currentStep === 3 && !formData.workStatus) ||
              (currentStep === 4 && !formData.familyStatus) ||
              (currentStep === 5 && formData.goals.length === 0)
            }
            className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
          >
            Next
            <ChevronRight className="h-5 w-5 ml-2" />
          </button>
        ) : (
          <button
            onClick={calculateRecommendations}
            disabled={formData.support.length === 0}
            className="flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
          >
            Get My Recommendations
            <Check className="h-5 w-5 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SmartApplicationForm;
