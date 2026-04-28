import { useState } from "react";

export default function SearchBar({ onSearch, onClear }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Buscar</button>

      <button type="button" onClick={handleClear}>
        Limpiar
      </button>
    </form>
  );
}