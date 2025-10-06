import { LucideIcon } from 'lucide-react';

interface CallToActionButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  icon?: LucideIcon;
}

interface CallToActionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttons: CallToActionButton[];
  backgroundGradient?: string;
  showWave?: boolean;
  className?: string;
}

export default function CallToAction({
  title,
  description,
  icon: Icon,
  buttons,
  backgroundGradient = "from-blue-600 via-blue-700 to-blue-800",
  showWave = true,
  className = ""
}: CallToActionProps) {
  return (
    <section className={`relative py-24 bg-gradient-to-br ${backgroundGradient} text-white overflow-hidden ${className}`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
          <Icon className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {buttons.map((button, index) => {
            const ButtonIcon = button.icon;
            
            if (button.variant === 'secondary') {
              return (
                <a
                  key={index}
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  <span>{button.text}</span>
                  {ButtonIcon && (
                    <ButtonIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                </a>
              );
            }
            
            return (
              <a
                key={index}
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noopener noreferrer" : undefined}
                className="group bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 inline-flex items-center justify-center"
              >
                <span>{button.text}</span>
                {ButtonIcon && (
                  <ButtonIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </a>
            );
          })}
        </div>
      </div>
      
      {/* Bottom Wave */}
      {showWave && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      )}
    </section>
  );
}
