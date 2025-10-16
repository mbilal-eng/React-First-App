import { useEffect, useState } from "react";
import "./App.css";

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
    localStorage.setItem("todos", JSON.stringify(todoList));
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

      <div
        style={{
          minHeight: "50vh",
          background: "#0993fdff",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {todoList && <p>No Todos Yet!!!</p>}
        {todoList.map((todo) => (
          <div
            key={todo.id}
            style={{
              width: "400px",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <input
              type="checkbox"
              style={{
                marginRight: "10px",
                transform: "scale(1.5)",
                cursor: "pointer",
              }}
              checked={todo.completed}
              onChange={() => {
                toggleComplete(todo.id);
              }}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                fontSize: "18px",
              }}
            >
              {todo.text}
            </span>
            <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
              <button
                onClick={() => {
                  editTodo(todo.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
