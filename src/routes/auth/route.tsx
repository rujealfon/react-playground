import AuthLayout from '@/components/layouts/auth-layout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth')({
  component: () => <AuthLayout />,
});
