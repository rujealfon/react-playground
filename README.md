# React Playground

A modern React application built with TypeScript, Vite, TanStack Router, and Tailwind CSS. This playground demonstrates modern React patterns, components, and best practices using a **feature-based architecture**.

## Features

- ⚡ **Fast Development** - Built with Vite for lightning-fast development experience
- 🎨 **Beautiful UI** - Styled with Tailwind CSS and shadcn/ui components
- 🔧 **Type Safe** - Built with TypeScript for type-safe development
- 🌙 **Dark Mode** - Complete dark/light mode support with system preference detection
- 🧭 **Type-safe Routing** - TanStack Router for type-safe routing
- 🧪 **Testing** - Comprehensive test suite with Vitest and Testing Library
- 📱 **Responsive** - Mobile-first responsive design
- 🏗️ **Feature-Based Architecture** - Organized by business features for better scalability

## Architecture

This project uses a **feature-based architecture** that organizes code by business features rather than technical layers. This approach provides:

- **Better Scalability** - Easy to add new features without affecting existing ones
- **Improved Maintainability** - Related code is co-located and easier to find
- **Team Collaboration** - Multiple developers can work on different features independently
- **Clear Boundaries** - Each feature is self-contained with its own components, hooks, and services

For detailed information about the architecture, see [FEATURE_ARCHITECTURE.md](./FEATURE_ARCHITECTURE.md).

## Dark Mode

The application includes a comprehensive dark mode implementation:

- **Theme Toggle**: Click the theme toggle button in the header to switch between light, dark, and system themes
- **System Preference**: Automatically detects and follows your system's color scheme preference
- **Persistence**: Your theme preference is saved to localStorage and persists across sessions
- **Smooth Transitions**: All theme changes include smooth CSS transitions

### Theme Options

- **Light**: Force light mode regardless of system preference
- **Dark**: Force dark mode regardless of system preference
- **System**: Automatically follow your operating system's color scheme preference

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-playground
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Start the development server:

```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run test` - Run tests
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint issues
- `bun run format` - Format code with Prettier

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Router** - Type-safe routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Vitest** - Testing framework
- **Testing Library** - Testing utilities
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Project Structure

```
src/
├── app/                    # App configuration and setup
├── assets/                 # Static assets (images, styles)
├── features/              # Feature-based modules
│   ├── auth/              # Authentication feature
│   │   ├── components/    # Auth-specific components
│   │   ├── hooks/         # Auth-specific hooks
│   │   ├── pages/         # Auth pages (login, register)
│   │   ├── services/      # Auth API services
│   │   └── types/         # Auth TypeScript types
│   ├── dashboard/         # Dashboard feature
│   │   ├── components/    # Dashboard-specific components
│   │   ├── hooks/         # Dashboard-specific hooks
│   │   ├── pages/         # Dashboard pages (analytics, users, etc.)
│   │   ├── services/      # Dashboard API services
│   │   └── types/         # Dashboard TypeScript types
│   ├── public/            # Public pages feature
│   │   ├── components/    # Public-specific components
│   │   ├── hooks/         # Public-specific hooks
│   │   ├── pages/         # Public pages (home, about)
│   │   ├── services/      # Public API services
│   │   └── types/         # Public TypeScript types
│   └── shared/            # Shared/common code
│       ├── components/    # Reusable UI components
│       ├── hooks/         # Shared hooks
│       ├── services/      # Shared services
│       ├── types/         # Shared TypeScript types
│       └── utils/         # Utility functions
└── routes/                # TanStack Router route definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.
