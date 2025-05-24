import { createFileRoute } from '@tanstack/react-router';
import { DashboardLayout } from '../features/shared/components/DashboardLayout';

export const Route = createFileRoute('/dashboard')({
  component: () => <DashboardLayout />,
});
