# Trivyxa SaaS Platform

A modern, responsive SaaS platform built with React, Tailwind CSS, and React Router.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark mode support
- **Responsive Layout**: Mobile-first design that works on all devices
- **Component-Based**: Modular architecture for easy maintenance
- **Routing**: Client-side routing with React Router
- **Styling**: Tailwind CSS for consistent design system

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.jsx        # Hero section component
│   ├── Features.jsx    # Features showcase
│   ├── Stats.jsx       # Statistics display
│   ├── NewPricing.jsx  # Pricing plans
│   ├── Testimonials.jsx # Customer testimonials
│   ├── HelpSupport.jsx # Help and support section
│   ├── FAQ.jsx         # Frequently asked questions
│   ├── ContactUs.jsx   # Contact form
│   ├── Navbar.jsx      # Navigation header
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About us page
│   ├── Blog.jsx        # Blog listing page
│   └── NotFound.jsx    # 404 error page
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trivyxa-saas
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors and Themes

The application uses Tailwind CSS with a custom color palette. You can modify colors in `tailwind.config.cjs`.

### Components

All components are located in `src/components/` and can be easily customized. Each component is self-contained with its own styling and logic.

### Pages

Page components are in `src/pages/` and use the components from the components directory to build complete pages.

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- Responsive navigation with mobile menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Optimized images and content

## 🌙 Dark Mode

The application includes built-in dark mode support using Tailwind CSS classes. The theme automatically adapts based on user preferences.

## 🔧 Development

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components focused and single-purpose

### Adding New Components

1. Create a new file in `src/components/`
2. Export as default function
3. Import and use in pages as needed

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation if needed

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository.
