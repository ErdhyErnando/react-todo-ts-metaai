import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleDone,
  deleteTodo,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
