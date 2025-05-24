import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/')({
  component: Index,
});

function Index() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Welcome to React Playground
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A modern React application built with TypeScript, Vite, TanStack
          Router, and Tailwind CSS. Explore the features and see what&apos;s
          possible.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/dashboard"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get started
          </a>
          <a
            href="/about"
            className="text-sm leading-6 font-semibold text-foreground"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            TypeScript
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Built with TypeScript for type safety and better developer
            experience.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            TanStack Router
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Type-safe routing with nested layouts and automatic code splitting.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            Tailwind CSS
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Utility-first CSS framework for rapid UI development.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-8">
        <h2 className="text-2xl font-bold text-card-foreground">
          Features Overview
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">
              🎨 Dark Mode Support
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Toggle between light and dark themes with system preference
              detection.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">
              📱 Responsive Design
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Mobile-first design that works beautifully on all screen sizes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">
              🔒 Authentication
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete authentication flow with login and registration pages.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">
              📊 Dashboard
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Feature-rich dashboard with analytics, user management, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
