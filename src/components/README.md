# Reusable Components

This directory contains reusable components that help maintain consistency across the District 79 website and reduce code duplication.

## Components Overview

### 1. HeroSection
A consistent hero section component used across all pages.

```tsx
import HeroSection from '@/components/HeroSection';
import { Users } from 'lucide-react';

<HeroSection
  title="Page Title"
  subtitle="Optional Subtitle"
  description="Page description text"
  icon={Users}
  backgroundGradient="from-blue-600 to-blue-800" // optional
  showWave={true} // optional
/>
```

### 2. SectionWrapper
Wraps sections with consistent styling, background, and decorative elements.

```tsx
import SectionWrapper from '@/components/SectionWrapper';

<SectionWrapper
  backgroundGradient="from-gray-50 to-white" // optional
  backgroundColor="bg-white" // optional
  decorativeElements={true} // optional
  decorativeColors={{ primary: "bg-blue-100", secondary: "bg-green-100" }} // optional
>
  {/* Your section content */}
</SectionWrapper>
```

### 3. SectionHeader
Consistent section headers with icons and descriptions.

```tsx
import SectionHeader from '@/components/SectionHeader';
import { BookOpen } from 'lucide-react';

<SectionHeader
  title="Section Title"
  description="Section description"
  icon={BookOpen}
  iconColor="text-blue-600" // optional
  iconBgColor="bg-blue-100" // optional
  titleSize="5xl" // optional: lg, xl, 2xl, 3xl, 4xl, 5xl
  descriptionSize="2xl" // optional: lg, xl, 2xl
  maxWidth="3xl" // optional: 2xl, 3xl, 4xl, 5xl, 6xl
/>
```

### 4. FeatureCard
Displays feature information in a consistent card format.

```tsx
import FeatureCard from '@/components/FeatureCard';
import { Clock } from 'lucide-react';

<FeatureCard
  title="Feature Title"
  description="Feature description"
  icon={Clock}
  iconColor="text-blue-600" // optional
  iconBgColor="from-blue-100 to-blue-200" // optional
  href="/link" // optional - makes card clickable
  external={false} // optional - for external links
  className="text-center" // optional
/>
```

### 5. ProgramCard
Specialized card for displaying program information with external links.

```tsx
import ProgramCard from '@/components/ProgramCard';
import { GraduationCap } from 'lucide-react';

<ProgramCard
  title="Program Name"
  description="Program description"
  icon={GraduationCap}
  url="https://example.com"
  iconColor="text-blue-600" // optional
  iconBgColor="from-blue-100 to-blue-200" // optional
/>
```

### 6. ContactInfoCard
Displays contact information in a structured format.

```tsx
import ContactInfoCard from '@/components/ContactInfoCard';
import { MapPin } from 'lucide-react';

<ContactInfoCard
  title="Office Name"
  address="123 Main St\nCity, State 12345"
  phone="(555) 123-4567"
  email="contact@example.com"
  hours="9:00 AM - 5:00 PM"
  icon={MapPin}
  iconColor="text-blue-600" // optional
  iconBgColor="from-blue-100 to-blue-200" // optional
/>
```

### 7. CallToAction
Consistent call-to-action sections with multiple buttons.

```tsx
import CallToAction from '@/components/CallToAction';
import { ArrowRight } from 'lucide-react';

<CallToAction
  title="Ready to Get Started?"
  description="Take the next step in your educational journey."
  icon={ArrowRight}
  buttons={[
    {
      text: "Primary Action",
      href: "/primary",
      variant: "primary",
      icon: ArrowRight
    },
    {
      text: "Secondary Action",
      href: "/secondary",
      variant: "secondary",
      icon: ArrowRight,
      external: true // optional
    }
  ]}
  backgroundGradient="from-blue-600 via-blue-700 to-blue-800" // optional
  showWave={true} // optional
/>
```

## Color Schemes

The components support various color schemes. Here are some common combinations:

### Blue Theme
- `iconColor="text-blue-600"`
- `iconBgColor="from-blue-100 to-blue-200"`

### Green Theme
- `iconColor="text-green-600"`
- `iconBgColor="from-green-100 to-green-200"`

### Purple Theme
- `iconColor="text-purple-600"`
- `iconBgColor="from-purple-100 to-purple-200"`

### Yellow Theme
- `iconColor="text-yellow-600"`
- `iconBgColor="from-yellow-100 to-yellow-200"`

### Red Theme
- `iconColor="text-red-600"`
- `iconBgColor="from-red-100 to-red-200"`

### Indigo Theme
- `iconColor="text-indigo-600"`
- `iconBgColor="from-indigo-100 to-indigo-200"`

## Benefits

1. **Consistency**: All pages use the same visual patterns
2. **Maintainability**: Changes to styling can be made in one place
3. **Reusability**: Components can be used across multiple pages
4. **Type Safety**: TypeScript interfaces ensure proper usage
5. **Flexibility**: Extensive customization options while maintaining consistency
6. **Performance**: Reduced bundle size through code reuse

## Usage Tips

1. Always import the required icons from `lucide-react`
2. Use consistent color schemes across related sections
3. Leverage the `className` prop for additional customizations
4. Use `SectionWrapper` to maintain consistent spacing and backgrounds
5. Combine `SectionHeader` with content for well-structured sections
