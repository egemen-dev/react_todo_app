export default function Checkbox({ dataKey, value, onChange }) {
  return (
    <div className="relative col-span-1 rounded-full">
      <input
        className="h-5 w-5 cursor-pointer accent-green-600 rounded-lg"
        type="checkbox"
        data-key={dataKey}
        checked={value}
        onChange={onChange}
      />
    </div>
  );
}
