export default function Modal({ children, show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        {children}
      </div>
    </div>
  );
}