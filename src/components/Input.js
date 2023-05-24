export default function Input({ id }) {
  return (
    <div className="relative flex w-3/4 h-12">
      <input
        type="input"
        placeholder="My new task"
        className="w-full rounded-xl h-full px-2 shadow-sm sm:text-sm focus:outline-none bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
        autoComplete="off"
        id={id}
      />
    </div>
  );
}
