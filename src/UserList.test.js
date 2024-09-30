import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

const users = [
  { name: 'jane', email: 'jane@jane.com' },
  { name: 'sam', email: 'sam@sam.com' },
];

test('render one row per user', () => {
  render(<UserList users={users} />);
  const rows = screen.getAllByTestId('user');
  expect(rows).toHaveLength(2);
});

test('render on row per user v2', () => {
  render(<UserList users={users} />);
  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  expect(rows).toHaveLength(2);
});

test.skip('render the email and name of each user', () => {});
