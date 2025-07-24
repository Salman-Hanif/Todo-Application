import { useEffect, useState } from "react";
import Header from "./components/Header";
import './App.css'
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAdd = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  const handleDelete = (i) => {
    const updated = todos.filter((_, index) => index !== i);
    setTodos(updated);
  };

  const handleToggle = (i) => {
    const updated = todos.map((todo, index) =>
      index === i ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const handleEdit = (i) => {
    const newText = prompt("Edit Todo", todos[i].text);
    if (newText?.trim()) {
      const updated = todos.map((todo, index) =>
        index === i ? { ...todo, text: newText.trim() } : todo
      );
      setTodos(updated);
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <Header />
        <InputBox input={input} setInput={setInput} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          handleToggle={handleToggle}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}