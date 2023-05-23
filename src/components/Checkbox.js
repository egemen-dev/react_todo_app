export default function Checkbox({ dataKey, value, onChange }) {
  return (
    <div className="relative col-span-1 rounded-full flex justify-start items-center">
      <input
        className="h-6 w-6 cursor-pointer accent-green-600 dark:accent-green-500 rounded-lg"
        type="checkbox"
        data-key={dataKey}
        checked={value}
        onChange={onChange}
      />
    </div>
  );
}
