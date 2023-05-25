export default function Quote({ quote }) {
  return (
    <div className="flex flex-col items-center gap-4 pt-32 px-20 md:px-56">
      <p className="text-xl text-gray-500 dark:text-gray-400">{quote["quote"]}</p>
      <p className="text-gray-400 text-sm dark:text-gray-500 place-self-end italic">
        {quote["author"]}
      </p>
    </div>
  );
}
