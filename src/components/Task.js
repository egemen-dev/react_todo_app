export default function Task({ id, key, children }) {
  return (
    <div
      id={id}
      key={key}
      className="grid grid-cols-10 gap-2 items-center w-full xl:w-1/2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-4 py-2 cursor-pointer"
    >
      {children}
    </div>
  );
}
