export function Button({ children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
