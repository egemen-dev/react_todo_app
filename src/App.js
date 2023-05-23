import "./index.css";
import Task from "./components/Task";
import Input from "./components/Input";
import Icon from "./components/Icon";
import Toggle from "./components/Toggle";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
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

    if (todoInput.value.length > 140) {
      alert("Task is too long!");
      return;
    }

    if (todoList.length >= 14) {
      alert("Too many tasks!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      content: todoInput.value,
      isDone: false,
    };

    setTodoList([...todoList, newTodo]);
    todoInput.value = "";
    localStorage.setItem("todoList", JSON.stringify([...todoList, newTodo]));
  }

  function handleDelete(e) {
    const todoId = e.target.dataset.key;
    const newList = todoList.filter((item) => item.id !== Number(todoId));

    setTodoList(newList);
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  function handleEdit(e) {
    const todoId = e.target.dataset.key;
    const todoInput = document.getElementById("todoInput");
    const newList = todoList.filter((item) => item.id !== Number(todoId));

    todoInput.value = todoList.find((item) => item.id === Number(todoId)).content;

    setTodoList(newList);
    localStorage.setItem("todoList", JSON.stringify(newList));
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
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  function handleDeleteStorage() {
    if (!window.confirm("Are you sure to delete the whole list?")) return;

    const todoInput = document.getElementById("todoInput");
    todoInput.value = "";
    localStorage.removeItem("todoList");
    setTodoList([]);
  }

  return (
    <>
      <div className="dark:bg-slate-900 flex items-center justify-end gap-4 position-fixed top-0 right-0 p-2 bg-gray-100 dark:bg-slate-950 px-4">
        <Toggle />
      </div>
      <div className="dark:bg-slate-900 h-screen flex flex-col items-center justify-around">
        <ReactSortable
          list={todoList}
          setList={setTodoList}
          animation="200"
          easing="ease-out"
          className="w-full flex flex-col items-center gap-6 overflow-auto pt-6"
        >
          {todoList.map((todo) => (
            <Task id={todo.id} key={todo.id}>
              <Checkbox
                dataKey={todo.id}
                value={todo.isDone}
                onChange={handleCheckboxChange}
              />
              <p className="dark:text-gray-100 col-span-6 break-words cursor-pointer">
                {todo.content}
              </p>
              <div className="col-span-3 flex justify-end gap-4 min-w-max">
                <Button
                  color={"lime"}
                  dataKey={todo.id}
                  onClick={handleEdit}
                  icon={<Icon name="edit" size="md" dataKey={todo.id} />}
                />
                <Button
                  color={"sunset"}
                  dataKey={todo.id}
                  onClick={handleDelete}
                  icon={<Icon name="backspace" size="md" dataKey={todo.id} />}
                />
              </div>
            </Task>
          ))}
        </ReactSortable>
        <form
          className="flex items-center justify-between px-4 w-full xl:w-1/3 pt-6"
          onSubmit={handleSubmit}
        >
          <Button
            color={"sunset"}
            icon={<Icon name="delete" size="md" />}
            onClick={handleDeleteStorage}
          />
          <Input id="todoInput" name="content" />
          <Button
            color={"ocean"}
            id="submitButton"
            type="submit"
            icon={<Icon name="add-plus" size="md" />}
          />
        </form>
      </div>
    </>
  );
}

export default App;
