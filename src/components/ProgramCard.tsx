import { LucideIcon, ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  iconColor?: string;
  iconBgColor?: string;
  className?: string;
}

export default function ProgramCard({
  title,
  description,
  icon: Icon,
  url,
  iconColor = "text-blue-600",
  iconBgColor = "from-blue-100 to-blue-200",
  className = ""
}: ProgramCardProps) {
  return (
    <div className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden ${className}`}>
      <div className="p-8">
        <div className="flex items-start space-x-6">
          <div className={`bg-gradient-to-br ${iconBgColor} p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`h-8 w-8 ${iconColor}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                {title}
              </a>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {description}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              Learn More
              <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
