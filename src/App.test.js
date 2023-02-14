import { render, screen } from '@testing-library/react';
import SamuraiJsApp from "./App";

test('renders without crashing', () => {
  render(<SamuraiJsApp />);
  const div = screen.getByRole(/main/i);
  expect(div).toBeInTheDocument();
});
