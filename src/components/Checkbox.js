export default function Checkbox({ dataKey, value, onChange }) {
  return (
    <div className="relative col-span-1">
      <input
        className="h-6 w-6 cursor-pointer accent-green-600"
        type="checkbox"
        data-key={dataKey}
        checked={value}
        onChange={onChange}
      />
    </div>
  );
}
