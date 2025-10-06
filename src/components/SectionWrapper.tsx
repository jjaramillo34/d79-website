interface SectionWrapperProps {
  children: React.ReactNode;
  backgroundGradient?: string;
  backgroundColor?: string;
  className?: string;
  decorativeElements?: boolean;
  decorativeColors?: {
    primary: string;
    secondary: string;
  };
}

export default function SectionWrapper({
  children,
  backgroundGradient,
  backgroundColor = "bg-white",
  className = "",
  decorativeElements = true,
  decorativeColors = {
    primary: "bg-blue-100",
    secondary: "bg-green-100"
  }
}: SectionWrapperProps) {
  const backgroundClass = backgroundGradient ? `bg-gradient-to-br ${backgroundGradient}` : backgroundColor;
  
  return (
    <section className={`py-24 ${backgroundClass} relative overflow-hidden ${className}`}>
      {/* Background Decorative Elements */}
      {decorativeElements && (
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-24 -right-24 w-96 h-96 ${decorativeColors.primary} rounded-full opacity-20 animate-pulse`}></div>
          <div className={`absolute -bottom-24 -left-24 w-96 h-96 ${decorativeColors.secondary} rounded-full opacity-20 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
