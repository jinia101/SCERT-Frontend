# SCERT Frontend - Book Inventory Management System

A comprehensive web application for managing book distribution and inventory across educational institutions under the State Council of Educational Research and Training (SCERT). This system provides role-based dashboards for different administrative levels and streamlines the book requisition, distribution, and tracking process.

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
git clone https://github.com/jinia101/SCERT-Frontend.git
cd SCERT-Frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

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
SCERT-Frontend/
├── client/                     # Frontend React application
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── AdminLayout.tsx   # Admin dashboard layout
│   │   └── Navigation.tsx    # Navigation components
│   ├── pages/                # Application pages
│   │   ├── admin/           # Admin dashboard pages
│   │   ├── Index.tsx        # Landing page
│   │   └── NotFound.tsx     # 404 error page
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   └── App.tsx              # Main application component
├── server/                   # Backend Express server
│   ├── routes/              # API routes
│   └── index.ts             # Server entry point
├── netlify/                 # Netlify deployment configuration
│   └── functions/           # Serverless functions
├── public/                  # Static assets
├── shared/                  # Shared utilities and types
└── package.json            # Dependencies and scripts
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

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_APP_TITLE=SCERT Book Management
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow the existing component structure
- Use functional components with hooks
- Implement proper error handling
- Write meaningful commit messages

### Component Development

- Use shadcn/ui components for consistency
- Implement responsive design principles
- Follow accessibility best practices
- Use semantic HTML elements
- Optimize for performance

### Testing

- Write unit tests for utility functions
- Test components with user interactions
- Ensure cross-browser compatibility
- Validate responsive design

## 🙏 Acknowledgments

- **SCERT** - State Council of Educational Research and Training
- **shadcn/ui** - For beautiful UI components
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For utility-first styling
- **Netlify** - For seamless deployment and hosting

---

**Built with ❤️ for educational excellence and efficient book distribution management.**
