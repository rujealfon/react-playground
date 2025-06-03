import AppLayoutTemplate from '@/components/layouts/dashboard/dashboard-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { Outlet } from '@tanstack/react-router';

interface AppLayoutProps {
  breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ breadcrumbs, ...props }: AppLayoutProps) {
  return (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
      <Outlet />
    </AppLayoutTemplate>
  );
}
