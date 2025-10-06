import { LucideIcon, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfoCardProps {
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  className?: string;
}

export default function ContactInfoCard({
  title,
  address,
  phone,
  email,
  hours,
  icon: Icon,
  iconColor = "text-blue-600",
  iconBgColor = "from-blue-100 to-blue-200",
  className = ""
}: ContactInfoCardProps) {
  return (
    <div className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${className}`}>
      <div className="flex items-start space-x-4 mb-4">
        <div className={`bg-gradient-to-br ${iconBgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-3">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
          <span className="text-gray-600 whitespace-pre-line">{address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-gray-400 mr-3" />
          <a href={`tel:${phone}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            {phone}
          </a>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-gray-400 mr-3" />
          <a href={`mailto:${email}`} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            {email}
          </a>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-gray-400 mr-3" />
          <span className="text-gray-600 font-medium">{hours}</span>
        </div>
      </div>
    </div>
  );
}
