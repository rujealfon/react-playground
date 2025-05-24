import type { router } from '@/app/main';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
