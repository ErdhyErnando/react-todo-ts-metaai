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
  return <ul></ul>;
};
