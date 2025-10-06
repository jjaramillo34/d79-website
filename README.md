# District 79 Alternative Education Website

A modern, responsive website for District 79 Alternative Education built with Next.js, TypeScript, Tailwind CSS, and Lucide React icons.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Performance**: Optimized for fast loading and smooth user experience

## Pages

- **Home**: Hero section with key information and features
- **About**: Mission, vision, values, history, and leadership team
- **Programs & Schools**: Detailed information about educational programs and campus locations
- **Locations**: Campus information, contact details, and transportation options
- **Media**: News articles, videos, documents, and photo galleries
- **Resources**: Student resources, support contacts, and success tips
- **Contact**: Contact forms, department contacts, and emergency information

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd d79-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── programs/          # Programs & Schools page
│   ├── locations/         # Locations page
│   ├── media/             # Media page
│   ├── resources/         # Resources page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   └── Footer.tsx         # Site footer
```

## Customization

### Colors
The website uses a blue color scheme. You can customize colors in the Tailwind configuration or by updating the CSS classes throughout the components.

### Content
All content is currently hardcoded in the components. For a production application, consider:
- Using a CMS (Contentful, Strapi, etc.)
- Implementing a headless CMS
- Using markdown files for content

### Images
Placeholder images are used throughout the site. Replace with actual images in the `public/` directory.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team or create an issue in the repository.
