import { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/todoItem";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  // load todos from local storage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodoList(savedTodos);
    }
  }, []);

  // save todos to local storage, update when todoList changes
  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = () => {
    const newTodo = {
      id: todoList.length + 1,
      text: todoInput,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
    setTodoInput("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  };

  const editTodo = (id) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    const updatedText = prompt("Enter Todo", todoList[todoIndex].text);

    if (!updatedText) return;

    todoList[todoIndex].text = updatedText;
    // console.log(todoList[todoIndex])

    setTodoList([...todoList]);
  };

  const toggleComplete = (id) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === id);

    todoList[todoIndex].completed = !todoList[todoIndex].completed;

    setTodoList([...todoList]);
  };

  return (
    <>
      <h1>Todo App</h1>
      {/* Input Box */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          gap: "10px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <input
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            marginRight: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          type="text"
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

     <TodoItem todoList={todoList} editTodo={editTodo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </>
  );
}

export default App;
