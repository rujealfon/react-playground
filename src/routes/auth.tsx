import { createFileRoute } from '@tanstack/react-router';
import { PublicLayout } from '../features/shared/components/PublicLayout';

export const Route = createFileRoute('/auth')({
  component: () => <PublicLayout />,
});
