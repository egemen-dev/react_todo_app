import Icon from "./Icon";
import Input from "./Input";
import Button from "./Button";

export default function Form({ onSubmit, onKeyDown }) {
  return (
    <div className="flex justify-center items-center w-full h-24 fixed bottom-0 left-0 bg-gray-50 dark:bg-slate-950 border-solid border-t border-gray-300 dark:border-gray-700">
      <form
        className="flex items-center justify-around px-3 w-full md:w-1/2"
        onSubmit={onSubmit}
        onKeyDown={onKeyDown}
      >
        <Input id="todoInput" name="content" />
        <Button type="submit" icon={<Icon name="add-plus" size="md" />} />
      </form>
    </div>
  );
}
