import { FaTrash, FaEdit } from "react-icons/fa";

export default function TodoItem({ todo, index, handleToggle, handleEdit, handleDelete }) {
  return (
    <li className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2 shadow">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggle(index)}
          className="accent-blue-500 w-5 h-5"
        />
        <span className={`text-amber-400 ${todo.completed ? "line-through decoration-red-500" : ""}`}>
          {todo.text}
        </span>
      </div>
      <div className="flex gap-3 text-gray-500">
        <button onClick={() => handleEdit(index)} className="hover:text-yellow-500">
          <FaEdit />
        </button>
        <button onClick={() => handleDelete(index)} className="hover:text-red-500">
          <FaTrash />
        </button>
      </div>
    </li>
  );
}
