import Task from "./Task";
import Quote from "./Quote";

export default function List({
  todoList,
  handleCheckboxChange,
  handleEdit,
  handleDelete,
  quote,
}) {
  return todoList.length === 0 ? (
    <Quote quote={quote} />
  ) : (
    todoList.map((todo) => (
      <Task
        todo={todo}
        handleCheckboxChange={handleCheckboxChange}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    ))
  );
}
