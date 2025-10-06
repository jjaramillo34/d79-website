import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  titleSize?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  descriptionSize?: 'lg' | 'xl' | '2xl';
  maxWidth?: '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  icon: Icon,
  iconColor = "text-blue-600",
  iconBgColor = "bg-blue-100",
  titleSize = "5xl",
  descriptionSize = "2xl",
  maxWidth = "3xl",
  className = ""
}: SectionHeaderProps) {
  const titleSizeClasses = {
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-4xl",
    "3xl": "text-4xl md:text-5xl",
    "4xl": "text-4xl md:text-5xl",
    "5xl": "text-4xl md:text-5xl"
  };

  const descriptionSizeClasses = {
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-xl md:text-2xl"
  };

  const maxWidthClasses = {
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl"
  };

  return (
    <div className={`text-center mb-20 ${className}`}>
      <div className={`inline-flex items-center justify-center w-20 h-20 ${iconBgColor} rounded-full mb-6`}>
        <Icon className={`h-10 w-10 ${iconColor}`} />
      </div>
      <h2 className={`${titleSizeClasses[titleSize]} font-bold text-gray-900 mb-6`}>
        {title}
      </h2>
      <p className={`${descriptionSizeClasses[descriptionSize]} text-gray-600 ${maxWidthClasses[maxWidth]} mx-auto leading-relaxed`}>
        {description}
      </p>
    </div>
  );
}
