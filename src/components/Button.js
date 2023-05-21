export default function Button({ color, label, dataKey, onClick, icon }) {
  function renderColor(color) {
    switch (color) {
      case "red":
        return "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-600";
      case "green":
        return "text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600";
      case "amber":
        return "text-dark bg-amber-400 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-md text-sm px-3 py-1.5 text-center dark:bg-amber-300 dark:hover:bg-amber-500 dark:focus:ring-amber-600";
      case "light-red":
        return "text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-3 py-1.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-600";
      default:
        return "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-tr-lg rounded-br-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600";
    }
  }

  return (
    <button className={renderColor(color)} data-key={dataKey} onClick={onClick}>
      <div className="flex flex-row gap-1">
        {label}
        {icon}
      </div>
    </button>
  );
}
