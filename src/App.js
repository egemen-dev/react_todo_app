import Task from "./components/Task";
import { createElement, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(["111", "222", "333"]);

  function handleSubmit(e) {
    e.preventDefault();
    const todoInput = document.getElementById("todoInput");

    if (todoInput.value === "") return;

    setTodoList([...todoList, todoInput.value]);
    todoInput.value = "";
  }

  function handleDelete(e) {
    const todoId = e.target.dataset.key;
    const newList = todoList.filter((item) => item !== todoList[todoId]);

    setTodoList(newList);
  }

  return (
    <div className="App">
      <Task>
        <ul>
          {todoList.map((todo, uniqKey) => (
            <div>
              <li id={uniqKey}>{todo}</li>
              <button data-key={uniqKey} onClick={handleDelete}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </Task>

      <form onSubmit={handleSubmit}>
        <input id="todoInput" name="content" />
        <button id="submitButton" type="submit" data-action="new">
          Submit form
        </button>
      </form>
    </div>
  );
}

export default App;
