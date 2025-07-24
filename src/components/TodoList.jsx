import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleToggle, handleEdit, handleDelete }) {
  return (
    <ul className="space-y-3">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          handleToggle={handleToggle}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
