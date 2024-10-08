import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from './App';

test('can receive a new user and show it on a list v1', async () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const buttonSubmit = screen.getByRole('button', { name: /add user/i });

  await user.click(nameInput);
  await user.keyboard('jane');
  await user.click(emailInput);
  await user.keyboard('jane@jane.com');

  await user.click(buttonSubmit);

  const name = screen.getByRole('cell', { name: 'jane' });
  const email = screen.getByRole('cell', { name: 'jane@jane.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

test('can receive a new user and show it on a list v2', async () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /enter email/i });
  const submitButton = screen.getByRole('button', { name: /add user/i });

  await user.click(nameInput);
  await user.keyboard('jane');
  await user.click(emailInput);
  await user.keyboard('jane@jane.com');
  await user.click(submitButton);

  const rows = within(screen.getByTestId('user')).getAllByRole('cell');
  expect(rows).toHaveLength(2);
});
