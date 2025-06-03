import PublicLayout from '@/components/layouts/auth-layout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)')({
  component: () => (
    <PublicLayout title="Public Layout" description="Public Layout" />
  ),
});
