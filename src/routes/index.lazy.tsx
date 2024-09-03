import { HomePage } from '@/pages/home/HomePage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: () => <HomePage />,
});
