import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2">
        <header className="flex gap-2 p-4">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/login" className="[&.active]:font-bold">
            Login
          </Link>
        </header>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
