import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('New todo'), {
    target: { value: 'Write tests' },
  });
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText('Write tests')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});