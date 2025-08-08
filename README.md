# SCERT Book Management System

A comprehensive web application for managing book distribution and inventory across educational institutions under the State Council of Educational Research and Training (SCERT). This system provides role-based dashboards for different administrative levels and streamlines the book requisition, distribution, and tracking process across Tripura state.

## 🚀 Features

### Multi-Level Administrative Access

- **State Level Dashboard** - Complete oversight of all districts, schools, and book distribution
- **District Level Dashboard** - Manage book distribution across blocks within a district
- **Block Level Dashboard** - Oversee schools and manage requisitions at block level
- **School Level Dashboard** - Handle individual school book inventory and student distribution
- **Private School Dashboard** - Specialized interface for private school book management

### Core Functionality

- **Book Inventory Management** - Track books by class, subject, and medium
- **Requisition System** - Submit and manage book requests across all levels
- **Distribution Tracking** - Monitor book distribution from state to student level
- **E-Challan System** - Digital payment and billing management
- **Charts & Visualization** - Comprehensive analytics and reporting dashboards
- **Profile Management** - Maintain institutional and personnel profiles
- **Notification System** - Real-time updates and alerts
- **Backlog Entry** - Handle pending distributions and delayed requisitions

### Advanced Features

- **Multi-language Support** - Books available in English, Hindi, Urdu, and Marathi
- **PDF Generation** - Generate reports and documentation
- **Real-time Analytics** - Interactive charts for data visualization
- **Responsive Design** - Works seamlessly across desktop and mobile devices
- **Role-based Access Control** - Secure access based on administrative level
- **Type Safety** - Full TypeScript integration for robust development
- **Modern Architecture** - Industry-standard project structure and best practices

## 🛠️ Technology Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components

### UI Components & Libraries

- **Radix UI** - Headless UI components for accessibility
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Efficient form handling
- **React Query** - Server state management
- **React Router DOM** - Client-side routing
- **Recharts** - Data visualization and charts
- **Framer Motion** - Smooth animations and transitions

### Backend & Deployment

- **Express.js** - Server-side API
- **Netlify Functions** - Serverless deployment
- **Netlify** - Static site hosting and deployment

### Development Tools

- **Vitest** - Unit testing framework
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **SWC** - Fast TypeScript/JavaScript compiler

## 📋 Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- Modern web browser with JavaScript enabled

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/udai7/builder-spark-verse.git
cd builder-spark-verse
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

## 📁 Project Structure

```
builder-spark-verse/
├── docs/                       # Project documentation
│   ├── development.md         # Development guidelines
│   └── restructure-summary.md # Project restructure notes
├── src/                       # Frontend React application
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── AdminLayout.tsx  # Admin dashboard layout
│   │   └── Navigation.tsx   # Navigation components
│   ├── pages/               # Application pages
│   │   ├── admin/          # Admin dashboard pages
│   │   ├── Index.tsx       # Landing page
│   │   └── NotFound.tsx    # 404 error page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── context/            # React context providers
│   ├── data/               # Static data and constants
│   ├── App.tsx             # Main application component
│   ├── global.css          # Global styles
│   └── vite-env.d.ts       # Vite environment types
├── server/                  # Backend Express server
│   ├── routes/             # API routes
│   └── index.ts            # Server entry point
├── shared/                  # Shared utilities between client/server
├── netlify/                # Netlify deployment configuration
│   └── functions/          # Serverless functions
├── public/                 # Static assets
├── .env.example            # Environment variables template
└── package.json           # Dependencies and scripts
```

## 🏗️ Available Scripts

| Script                 | Description                                 |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Start development server with hot reload    |
| `npm run build`        | Build both client and server for production |
| `npm run build:client` | Build only the client application           |
| `npm run build:server` | Build only the server application           |
| `npm start`            | Start production server                     |
| `npm test`             | Run unit tests                              |
| `npm run format.fix`   | Format code with Prettier                   |
| `npm run typecheck`    | Run TypeScript type checking                |

## 🎯 Key Features in Detail

### Dashboard Analytics

- **Distribution Metrics** - Real-time tracking of book distribution rates
- **School Performance** - Monitor individual school book utilization
- **Inventory Alerts** - Warnings for low stock and pending requisitions
- **Geographic Analytics** - District and block-wise distribution insights

### Book Management

- **Multi-class Support** - Handle books for classes 1-12
- **Subject-wise Tracking** - Mathematics, Science, English, Hindi, etc.
- **Medium Selection** - Support for multiple languages
- **Stock Management** - Real-time inventory tracking

### User Management

- **Role-based Authentication** - Secure login for different admin levels
- **Profile Management** - Maintain user profiles and credentials
- **Permission Control** - Access control based on administrative hierarchy

### Reporting & Analytics

- **Interactive Charts** - Visual representation of data using Recharts
- **Export Functionality** - Generate PDF reports and Excel exports
- **Custom Filters** - Filter data by date, district, school, or subject
- **Trend Analysis** - Historical data analysis and forecasting

## 🌐 Deployment

This application is configured for deployment on Netlify:

1. **Automatic Deployment** - Connected to GitHub for automatic deployments
2. **Serverless Functions** - Backend API runs on Netlify Functions
3. **Static Site Generation** - Optimized build for fast loading
4. **CDN Distribution** - Global content delivery network

### Environment Variables

Create a `.env.local` file in the root directory based on `.env.example`:

```env
# Application
VITE_APP_TITLE="SCERT Book Management System"
VITE_APP_VERSION="1.0.0"

# API Configuration
VITE_API_BASE_URL="http://localhost:8080"

# Add other environment variables as needed
```

## 📊 Project Status

### Recent Updates (2025)

- ✅ **Project Restructured** - Migrated from `client/` to industry-standard `src/` structure
- ✅ **TypeScript Integration** - Added comprehensive type definitions
- ✅ **Documentation** - Added development docs and project guides
- ✅ **Environment Setup** - Created environment variable templates
- ✅ **Code Organization** - Improved folder structure and component organization

### Current Focus Areas

- **Tripura State Integration** - Complete district and block data integration
- **Multi-language Support** - Bengali, Hindi, and English language support
- **Real-time Analytics** - Enhanced dashboard with live data updates
- **Mobile Optimization** - Responsive design improvements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔧 Development Guidelines

### Getting Started for Developers

1. **Prerequisites**: Node.js 18+, npm/yarn
2. **Setup**: Clone repo, install dependencies, copy `.env.example` to `.env.local`
3. **Development**: Run `npm run dev` for hot-reload development
4. **Testing**: Run `npm run typecheck` to verify TypeScript types
5. **Documentation**: Check `/docs` folder for detailed guides

### Project Architecture

- **Frontend**: React 18 + TypeScript + Vite for fast development
- **Styling**: Tailwind CSS + shadcn/ui for consistent design system
- **State Management**: React Query for server state, Context API for client state
- **Routing**: React Router DOM for single-page application navigation
- **Backend**: Express.js with TypeScript for API endpoints

### Code Style

- **TypeScript First**: All components and utilities use TypeScript
- **Functional Components**: Use React hooks and functional patterns
- **Component Structure**: Follow shadcn/ui patterns for consistency
- **Accessibility**: Implement ARIA standards and semantic HTML
- **Performance**: Optimize bundle size and runtime performance

## 🙏 Acknowledgments

- **SCERT Tripura** - State Council of Educational Research and Training, Tripura
- **shadcn/ui** - For beautiful and accessible UI components
- **Radix UI** - For headless UI component primitives
- **Tailwind CSS** - For utility-first CSS framework
- **Vite** - For lightning-fast development experience
- **Netlify** - For seamless deployment and hosting

## 📝 License

This project is developed for educational purposes under SCERT Tripura.

---

**Built with ❤️ for educational excellence and efficient book distribution management across Tripura state.**
