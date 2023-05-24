export default function Task({ id, key, children }) {
  return (
    <div
      id={id}
      key={key}
      className="grid grid-cols-10 gap-2 items-center w-full md:w-1/2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-xl px-4 py-3"
    >
      {children}
    </div>
  );
}
