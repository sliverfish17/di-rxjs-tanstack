import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3 className="mx-auto text-center text-red">hello world</h3>
    </div>
  );
}
