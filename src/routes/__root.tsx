import { Header } from '@/shared/ui/Header';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2">
        <Header />
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
