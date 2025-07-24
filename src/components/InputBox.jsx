import { FaPlus } from "react-icons/fa";

export default function InputBox({ input, setInput, handleAdd }) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        className="flex-grow border-2 border-amber-200 bg-white text-amber-800 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-amber-300 shadow-inner"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-gradient-to-r from-amber-400 to-rose-400 text-white p-3 rounded-xl hover:opacity-90 transition-all shadow-lg hover:scale-105"
      >
        <FaPlus className="text-lg" />
      </button>
    </div>
  );
}