export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
    >
      {text}
    </button>
  );
}