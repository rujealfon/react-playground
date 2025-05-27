import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard')({
  component: () => <DashboardLayout />,
});
