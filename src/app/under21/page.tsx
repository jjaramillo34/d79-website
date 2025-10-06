import { GraduationCap, Users, Clock, Heart, BookOpen, Briefcase, MapPin, ArrowRight, Star } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import SectionHeader from '@/components/SectionHeader';
import ProgramCard from '@/components/ProgramCard';
import FeatureCard from '@/components/FeatureCard';
import CallToAction from '@/components/CallToAction';

export default function Under21() {
  const programs = [
    {
      title: "Referral Centers for High School Alternatives",
      description: "Referral Centers can help you: Enroll in Pathways to Graduation; Explore all possible paths to a high school diploma; Get referrals for childcare, counseling, substance abuse treatment and additional programs.",
      url: "https://p2g.nyc/enroll/",
      icon: MapPin
    },
    {
      title: "Pathways to Graduation",
      description: "Pathways to Graduation (P2G) provides students with the preparation and tools needed for a successful future by helping them earn their High School Equivalency Diploma. P2G is a full-time free program and is a part of the New York City Department of Education. We have locations citywide, and are open for students age 17-21.",
      url: "http://p2g.nyc/",
      icon: GraduationCap
    },
    {
      title: "LYFE-Living For The Young Family",
      description: "LYFE is a NYC Department of Education program that provides free early childhood education to children of student parents. LYFE makes it possible for student parents to stay on track toward graduating from high school or completing their high school equivalency while parenting. In addition, LYFE supports student parents' transition into parenthood by providing high-quality early childhood education, supportive counseling, academic guidance and advocacy services.",
      url: "https://lyfenyc.org/",
      icon: Heart
    },
    {
      title: "Young Adult Borough Centers",
      description: "Young Adult Borough Centers (YABCs) are afternoon and evening programs designed to meet the educational needs of high school students who are behind in credit or have adult responsibilities that make it hard to attend school during the day. Students attend YABCs part-time in the afternoon or evening to earn a high school diploma.",
      url: "https://www.schools.nyc.gov/enrollment/other-ways-to-graduate/young-adult-borough-centers",
      icon: Clock
    },
    {
      title: "Judith S. Kaye High School",
      description: "We are a New York City public transfer high school co-located with the School of Cooperative Technical Education (Co-Op Tech) in Manhattan and Queens. At JSK we utilize a multitude of innovative services, and a customized level of support for each student to earn a Regents or High School Equivalency Diploma, along with career and technical certificates at Co-op Tech in a variety of cutting edge trade areas.",
      url: "https://www.jskhigh.org/",
      icon: BookOpen
    },
    {
      title: "Cooperative Technical Education",
      description: "For over 30 years, The School of Cooperative Technical Education is a half-day vocational program that offers students hands on training in a variety of in demand and cutting edge trade areas. Coop Tech serves approximately 1,500 students who are 17 to 21 years of age and who represent a wide variety of ethic and cultural backgrounds, disabilities and educational histories.",
      url: "http://www.co-optech.org/",
      icon: Briefcase
    },
    {
      title: "ReStart Academy",
      description: "ReStart Academy is an alternative education program that provides transitional services for students ages 13 through 21 who reside in temporary or involuntary settings. As a program under the auspices of NYC District 79, New York City's alternative schools district, we have 27 locations throughout the five boroughs and including two residential sites in upstate New York.",
      url: "https://www.restartacademy.org/",
      icon: Users
    },
    {
      title: "Alternate Learning Center",
      description: "District 79 manages the Alternate Learning Center's (ALCs) instructional, social and emotional program for middle school and high school students on Superintendent's Suspension.",
      url: "https://infohub.nyced.org/in-our-schools/programs/district-79/alternate-learning-centers",
      icon: BookOpen
    },
    {
      title: "Passages Academy",
      description: "Passages Academy is a New York City Department of Education (DOE) school operated by District 79. Passages Academy operates in collaboration with the New York City Administration of Children Services (ACS), Division of Youth and Family Justice (DYFJ), and Office of Youth and Family Development (OYFD) to provide exceptional educational services to New York City students entrusted to their care and custody. We also collaborate with the Office of Children and Family Services to provide academic instruction to students diverted from incarceration.",
      url: "https://passagesacademy.org/index.html",
      icon: GraduationCap
    },
    {
      title: "East River Academy",
      description: "Students 18 years old and older with no maximum age requirement, who are detained or serving time on Rikers Island, receive academic services from East River Academy (ERA). Classes are provided by certified teachers within the NYCDOE and NYS approval as an HSE preparation program.",
      url: "https://sites.google.com/d-79.com/east-river-academy-home/home",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Schools and Programs"
        subtitle="for Under 21"
        description="Discover the educational opportunities available for students under 21 years old in District 79."
        icon={Users}
      />

      <SectionWrapper
        backgroundGradient="from-gray-50 to-white"
        decorativeColors={{ primary: "bg-blue-100", secondary: "bg-green-100" }}
      >
        <SectionHeader
          title="Available Programs"
          description="Explore the comprehensive range of educational programs designed specifically for students under 21."
          icon={BookOpen}
        />

        <div className="space-y-8">
          {programs.map((program, index) => {
            const colors = [
              { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-600' },
              { bg: 'from-green-100 to-green-200', icon: 'text-green-600' },
              { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-600' },
              { bg: 'from-yellow-100 to-yellow-200', icon: 'text-yellow-600' },
              { bg: 'from-red-100 to-red-200', icon: 'text-red-600' },
              { bg: 'from-indigo-100 to-indigo-200', icon: 'text-indigo-600' },
              { bg: 'from-pink-100 to-pink-200', icon: 'text-pink-600' },
              { bg: 'from-teal-100 to-teal-200', icon: 'text-teal-600' },
              { bg: 'from-orange-100 to-orange-200', icon: 'text-orange-600' },
              { bg: 'from-cyan-100 to-cyan-200', icon: 'text-cyan-600' }
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                icon={program.icon}
                url={program.url}
                iconColor={colorScheme.icon}
                iconBgColor={colorScheme.bg}
              />
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="bg-white"
        decorativeColors={{ primary: "bg-purple-100", secondary: "bg-yellow-100" }}
      >
        <SectionHeader
          title="Why Choose District 79?"
          description="Our programs are designed to meet the unique needs of students under 21 who need alternative pathways to success."
          icon={Star}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Flexible Scheduling"
            description="Programs available during day, evening, and weekend hours to accommodate your schedule."
            icon={Clock}
            iconColor="text-blue-600"
            iconBgColor="from-blue-100 to-blue-200"
            className="text-center"
          />
          <FeatureCard
            title="Supportive Services"
            description="Comprehensive support including childcare, counseling, and family services."
            icon={Heart}
            iconColor="text-green-600"
            iconBgColor="from-green-100 to-green-200"
            className="text-center"
          />
          <FeatureCard
            title="Multiple Pathways"
            description="Various options to earn your high school diploma or equivalency certificate."
            icon={GraduationCap}
            iconColor="text-purple-600"
            iconBgColor="from-purple-100 to-purple-200"
            className="text-center"
          />
          <FeatureCard
            title="Career Training"
            description="Hands-on vocational training in high-demand career fields."
            icon={Briefcase}
            iconColor="text-yellow-600"
            iconBgColor="from-yellow-100 to-yellow-200"
            className="text-center"
          />
        </div>
      </SectionWrapper>

      <CallToAction
        title="Ready to Get Started?"
        description="Contact us today to learn more about our programs and find the right educational pathway for you."
        icon={ArrowRight}
        buttons={[
          {
            text: "Contact Us",
            href: "/contact",
            variant: "primary",
            icon: ArrowRight
          },
          {
            text: "Call (718) 557-2590",
            href: "tel:718-557-2590",
            variant: "secondary",
            icon: ArrowRight
          }
        ]}
      />
    </div>
  );
}
