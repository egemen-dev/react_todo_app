export default function Input({ id, button }) {
  return (
    <div class="relative flex">
      <input
        type="input"
        placeholder="My new task"
        class="w-full rounded-tl-lg rounded-bl-lg border-gray-200 py-2.5 px-2  shadow-sm sm:text-sm focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-900 dark:text-gray-100"
        autocomplete="off"
        id={id}
      />

      {button}
    </div>
  );
}
