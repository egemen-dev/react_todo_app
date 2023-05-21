export default function Task({ id, key, children }) {
  return (
    <div id={id} key={key}>
      {children}
    </div>
  );
}
