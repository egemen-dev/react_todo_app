export default function Toggle() {
  // Toggle Dark Function
  function toggleDark() {
    document.querySelector("html").classList.toggle("dark");
    console.log(document.querySelector("html").classList.contains("dark"));

    localStorage.setItem(
      "isDarkMode",
      document.querySelector("html").classList.contains("dark")
    );
  }

  return (
    <label for="AcceptConditions" className="relative h-8 w-14 cursor-pointer">
      <input
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
        onClick={toggleDark}
      />

      <span class="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
        <svg
          data-checked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="hidden h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>

      <span className="absolute inset-0 rounded-full bg-gray-500 transition peer-checked:bg-green-500"></span>
    </label>
  );
}
