import React from "react";
import Todo from "../models/Todo";

interface TodoItemProps {
  todo: Todo;
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleDone,
  deleteTodo,
}) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
