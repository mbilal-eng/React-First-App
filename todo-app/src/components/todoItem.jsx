import React from 'react'

const TodoItem = ({todoList, toggleComplete, deleteTodo, editTodo}) => {
  return (
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
        {!todoList && <p>No Todos Yet!!!</p>}

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
  )
}

export default TodoItem