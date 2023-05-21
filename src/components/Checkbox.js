export default function Checkbox({ dataKey, value, onChange }) {
  return (
    <div class="relative col-span-1">
      <input
        class="h-6 w-6 cursor-pointer accent-green-600"
        type="checkbox"
        data-key={dataKey}
        checked={value}
        onChange={onChange}
      />
    </div>
  );
}
