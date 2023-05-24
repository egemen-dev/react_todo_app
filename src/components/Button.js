export default function Button({ label, dataKey, onClick, icon }) {
  return (
    <button
      className={
        "relative inline-flex items-center justify-center p-2.5 overflow-hidden text-sm font-medium text-gray-900 rounded-xl bg-gray-200 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 "
      }
      data-key={dataKey}
      onClick={onClick}
    >
      <div className="flex flex-row gap-1">
        {label}
        {icon}
      </div>
    </button>
  );
}
