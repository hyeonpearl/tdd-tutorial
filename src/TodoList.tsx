import React from 'react';
import TodoItem from './TodoItem';

interface Props {
  todos: {
    id: number;
    text: string;
    done: boolean;
  }[];
  onToggle?: (id: number) => void;
  onRemove?: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onRemove }: Props) => {
  return (
    <ul data-testid='TodoList'>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
