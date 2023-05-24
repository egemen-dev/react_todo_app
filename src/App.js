import "./index.css";
import Task from "./components/Task";
import Input from "./components/Input";
import Icon from "./components/Icon";
import Quotes from "./quotes/list.json";
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

  const [quote, setQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    return Quotes["quotes"][Math.floor(Math.random() * Quotes["quotes"].length)];
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case "Enter":
        return handleSubmit(e);
      case "Delete":
        return handleRemoveLastTask(e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const todoInput = document.getElementById("todoInput");

    if (todoInput.value === "") return;

    if (todoInput.value.length > 150) {
      alert("Task is too long!");
      return;
    }

    if (todoList.length >= 20) {
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

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

    todoInput.focus();
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

    todoInput.focus();
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

  function handleRemoveLastTask() {
    const todoInput = document.getElementById("todoInput");
    const newList = todoList.slice(0, -1);

    todoInput.value = "";
    setTodoList(newList);
    localStorage.setItem("todoList", JSON.stringify(newList));
  }

  return (
    <>
      <nav className="backdrop-blur-md flex items-center justify-end z-50 fixed w-full top-0 right-0 p-2 px-4 h-12 border-solid border-b border-gray-300 dark:border-gray-700">
        <Toggle />
      </nav>
      <ReactSortable
        list={todoList}
        setList={setTodoList}
        className="w-full flex flex-col items-center rounded-lg mt-16 mb-48 gap-4"
        animation={400}
        delayOnTouchStart={true}
        delay={10}
        handle=".handle"
        id="taskList"
      >
        {todoList.length === 0 ? (
          <div className="flex flex-col items-center gap-4 px-6">
            <p className="text-xl text-gray-500 dark:text-gray-400">{quote["quote"]}</p>
            <p className="text-gray-400 text-sm dark:text-gray-500 place-self-end italic">
              {quote["author"]}
            </p>
          </div>
        ) : (
          todoList.map((todo) => (
            <Task id={todo.id} key={todo.id}>
              <Checkbox
                dataKey={todo.id}
                value={todo.isDone}
                onChange={handleCheckboxChange}
              />
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
            </Task>
          ))
        )}
      </ReactSortable>
      <div className="flex justify-center items-center w-full h-24 fixed bottom-0 left-0 bg-gray-50 dark:bg-slate-950 border-solid border-t border-gray-300 dark:border-gray-700">
        <form
          className="flex items-center justify-around px-3 w-full md:w-1/2"
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          <Input id="todoInput" name="content" />
          <Button type="submit" icon={<Icon name="add-plus" size="md" />} />
        </form>
      </div>
    </>
  );
}

export default App;
