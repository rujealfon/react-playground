import { Link, Outlet } from '@tanstack/react-router';
import React from 'react';
import { Button } from './button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';
import { Separator } from './separator';
import { ThemeToggle } from './theme-toggle';

export const PublicLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">
                R
              </span>
            </div>
            <span className="text-xl font-semibold">React Playground</span>
          </Link>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none select-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            React Playground
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore modern React patterns and components.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/components"
                        >
                          <div className="text-sm leading-none font-medium">
                            Components
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Reusable components built with Radix UI and Tailwind
                            CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/examples"
                        >
                          <div className="text-sm leading-none font-medium">
                            Examples
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Examples and templates for common use cases.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="hidden items-center space-x-2 sm:flex">
              <Button variant="ghost" asChild>
                <Link to="/auth/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/auth/register">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <Button variant="ghost" size="sm">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">
                    R
                  </span>
                </div>
                <span className="font-semibold">React Playground</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building modern React applications with the latest tools and
                best practices.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Components
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Examples
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/about"
                    className="transition-colors hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Documentation
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Community
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-left transition-colors hover:text-foreground"
                  >
                    Status
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 React Playground. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <button
                type="button"
                className="transition-colors hover:text-foreground"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="transition-colors hover:text-foreground"
              >
                Terms of Service
              </button>
              <button
                type="button"
                className="transition-colors hover:text-foreground"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
