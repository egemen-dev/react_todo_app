export default function Input({ id }) {
  return (
    <div className="relative flex w-4/6 h-10">
      <input
        type="input"
        placeholder="My new task"
        className="w-full rounded-lg h-full px-2 mx-4 shadow-sm sm:text-sm focus:outline-none bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
        autoComplete="off"
        id={id}
      />
    </div>
  );
}
