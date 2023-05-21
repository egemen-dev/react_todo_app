export default function Task({ id, key, children }) {
  return (
    <div id={id} key={key} class="grid grid-cols-10 gap-2 items-center w-11/12 md:w-1/2">
      {children}
    </div>
  );
}
