import Task from "./components/Task";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

function App() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoList") !== null
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );

  function handleSubmit(e) {
    e.preventDefault();
    const todoInput = document.getElementById("todoInput");

    if (todoInput.value === "") return;

    const newTodo = {
      id: Date.now(),
      content: todoInput.value,
      isDone: false,
    };

    setTodoList([...todoList, newTodo]);
    todoInput.value = "";
  }

  function handleDelete(e) {
    const todoId = e.target.dataset.key;
    const newList = todoList.filter((item) => item.id !== Number(todoId));

    setTodoList(newList);
  }

  function handleEdit(e) {
    const todoId = e.target.dataset.key;
    const todoInput = document.getElementById("todoInput");
    const newList = todoList.filter((item) => item.id !== Number(todoId));

    todoInput.value = todoList.find((item) => item.id === Number(todoId)).content;

    setTodoList(newList);
  }

  function handleCheckboxChange(e) {
    const todoId = e.target.dataset.key;
    const newList = todoList.map((todo) => {
      if (todo.id === Number(todoId)) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    setTodoList(newList);
  }

  function handleDeleteStorage() {
    localStorage.removeItem("todoList");
    setTodoList([]);
  }

  function handleSaveToStorage() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  return (
    <div>
      <ReactSortable
        list={todoList}
        setList={setTodoList}
        animation="200"
        easing="ease-out"
      >
        {todoList.map((todo) => (
          <Task id={todo.id} key={todo.id}>
            <Checkbox
              dataKey={todo.id}
              value={todo.isDone}
              onChange={handleCheckboxChange}
            />
            {todo.content}
            <Button dataKey={todo.id} label="Delete" onClick={handleDelete} />
            <Button dataKey={todo.id} label="Edit" onClick={handleEdit} />
          </Task>
        ))}
      </ReactSortable>

      {todoList.length > 0 && (
        <>
          <Button label="Delete List" onClick={handleDeleteStorage} />
          <Button label="Save List" onClick={handleSaveToStorage} />
        </>
      )}

      <form onSubmit={handleSubmit}>
        <input id="todoInput" name="content" />
        <button id="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
