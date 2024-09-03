import { describe, it, expect, vi } from 'vitest';
import { HomePage } from '@/pages/home/HomePage';
import { render, screen } from '@testing-library/react';

// useAuth mock
vi.mock('@/core/auth/useAuth', () => ({
  useAuth: () => ({
    getEmail: () => 'user@gmail.com',
    isLoggedIn: () => true,
  }),
}));

// useLogout mock
vi.mock('@/features/auth/useLogout', () => ({
  useLogout: () => vi.fn(),
}));

describe('HomePage', () => {
  it('hello world render', () => {
    render(<HomePage />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  it('display login status', () => {
    render(<HomePage />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/user@gmail.com/i)).toBeInTheDocument();
  });

  it('logout button render', () => {
    render(<HomePage />);
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
  });
});
