import Checkbox from "./Checkbox";
import Button from "./Button";
import Icon from "./Icon";

export default function Task({ todo, handleCheckboxChange, handleEdit, handleDelete }) {
  return (
    <div
      id={todo.id}
      className="grid grid-cols-10 gap-2 items-center w-full md:w-1/2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-xl px-4 py-3"
    >
      <Checkbox dataKey={todo.id} value={todo.isDone} onChange={handleCheckboxChange} />
      <p className="dark:text-gray-200 col-span-6 break-words handle cursor-pointer text-gray-800 text-lg">
        {todo.content}
      </p>
      <div className="col-span-3 flex justify-end gap-4 min-w-max">
        <Button
          dataKey={todo.id}
          onClick={handleEdit}
          icon={<Icon name="edit" size="md" dataKey={todo.id} />}
        />
        <Button
          dataKey={todo.id}
          onClick={handleDelete}
          icon={<Icon name="backspace" size="md" dataKey={todo.id} />}
        />
      </div>
    </div>
  );
}
