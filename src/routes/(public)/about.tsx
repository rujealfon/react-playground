import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/about')({
  component: About,
});

function About() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">About</h1>
        <p className="text-muted-foreground">
          Learn more about this React Playground application
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-foreground">
          What is React Playground?
        </h2>
        <p className="text-muted-foreground">
          React Playground is a modern web application built to showcase best
          practices in React development. It demonstrates the power of combining
          cutting-edge tools and technologies to create a robust, scalable, and
          maintainable application.
        </p>

        <h2 className="text-2xl font-bold text-foreground">Technology Stack</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              Frontend
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• React 19 with TypeScript</li>
              <li>• TanStack Router for routing</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Radix UI for components</li>
              <li>• Lucide React for icons</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              Development
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Vite for build tooling</li>
              <li>• Vitest for testing</li>
              <li>• ESLint for code quality</li>
              <li>• Prettier for formatting</li>
              <li>• Husky for git hooks</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground">Features</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              🎨 Dark Mode
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete dark mode implementation with system preference detection
              and manual toggle. Supports light, dark, and system themes with
              smooth transitions.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              🚀 Type-Safe Routing
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              TanStack Router provides 100% type-safe navigation with nested
              layouts, automatic code splitting, and route prefetching for
              optimal performance.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              📱 Responsive Design
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Mobile-first responsive design built with Tailwind CSS. The
              application works seamlessly across all device sizes and screen
              resolutions.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              🧪 Testing
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Comprehensive testing setup with Vitest and React Testing Library.
              Includes unit tests for components, utilities, and user
              interactions.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground">Getting Started</h2>
        <p className="text-muted-foreground">
          This application serves as a template and learning resource for modern
          React development. Feel free to explore the codebase, run the tests,
          and use it as a starting point for your own projects.
        </p>
      </div>
    </div>
  );
}
