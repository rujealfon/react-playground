import AuthLayoutTemplate from '@/components/layouts/auth/auth-split-layout';
import { Outlet } from '@tanstack/react-router';

export default function PublicLayout({ ...props }) {
  return (
    <AuthLayoutTemplate {...props}>
      <Outlet />
    </AuthLayoutTemplate>
  );
}
