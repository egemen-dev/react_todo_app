import Toggle from "./Toggle";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-md flex items-center justify-end z-50 fixed w-full top-0 right-0 p-2 px-4 h-12 border-solid border-b border-gray-300 dark:border-gray-700">
      <Toggle />
    </nav>
  );
}
