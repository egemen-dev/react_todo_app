import "./index.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Checklist from "./components/Checklist";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

function App() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoList") !== null
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );

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

    if (todoInput.value.length > 250) {
      alert("Task is too long!");
      return;
    }

    if (todoList.length >= 25) {
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
      <Navbar />
      <ReactSortable
        list={todoList}
        setList={setTodoList}
        className="w-full flex flex-col items-center rounded-lg mt-16 mb-48 gap-4"
        animation={400}
        delayOnTouchStart={true}
        delay={10}
        handle=".handle"
      >
        <Checklist
          todoList={todoList}
          handleCheckboxChange={handleCheckboxChange}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </ReactSortable>
      <Form onSubmit={handleSubmit} onKeyDown={handleKeyDown} />
    </>
  );
}

export default App;
