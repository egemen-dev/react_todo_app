export default function Button({ label, dataKey, onClick }) {
  return (
    <button data-key={dataKey} onClick={onClick}>
      {label}
    </button>
  );
}
