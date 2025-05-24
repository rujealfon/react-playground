# React Playground

A modern React application built with TypeScript, Vite, TanStack Router, and Tailwind CSS. This playground demonstrates modern React patterns, components, and best practices.

## Features

- ⚡ **Fast Development** - Built with Vite for lightning-fast development experience
- 🎨 **Beautiful UI** - Styled with Tailwind CSS and shadcn/ui components
- 🔧 **Type Safe** - Built with TypeScript for type-safe development
- 🌙 **Dark Mode** - Complete dark/light mode support with system preference detection
- 🧭 **Type-safe Routing** - TanStack Router for type-safe routing
- 🧪 **Testing** - Comprehensive test suite with Vitest and Testing Library
- 📱 **Responsive** - Mobile-first responsive design

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
├── app/                 # App configuration and routing
├── assets/             # Static assets and styles
├── components/         # Reusable UI components
│   ├── layouts/       # Layout components
│   └── ui/            # UI components (buttons, forms, etc.)
├── lib/               # Utility functions and configurations
├── routes/            # Route components
└── types/             # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.
