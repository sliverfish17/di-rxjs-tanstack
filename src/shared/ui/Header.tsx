import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <header className="flex gap-2 p-4">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/login" className="[&.active]:font-bold">
        Login
      </Link>
    </header>
  );
};
