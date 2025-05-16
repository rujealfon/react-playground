import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './app';

describe('app', () => {
  it('renders Vite logo link', () => {
    render(<App />);
    expect(
      screen.getByRole('link', { name: /vite logo/i }),
    ).toBeInTheDocument();
  });
});
