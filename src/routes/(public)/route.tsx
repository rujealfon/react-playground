import { PublicLayout } from '@/components/layouts/PublicLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)')({
  component: () => <PublicLayout />,
});
