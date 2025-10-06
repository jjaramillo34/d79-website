import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  href?: string;
  external?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  iconColor = "text-blue-600",
  iconBgColor = "from-blue-100 to-blue-200",
  href,
  external = false,
  className = "",
  children
}: FeatureCardProps) {
  const CardContent = () => (
    <div className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${className}`}>
      <div className="flex items-center mb-6">
        <div className={`bg-gradient-to-br ${iconBgColor} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg mb-6">
        {description}
      </p>
      {children}
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <CardContent />
        </a>
      );
    } else {
      return (
        <a href={href} className="block">
          <CardContent />
        </a>
      );
    }
  }

  return <CardContent />;
}
