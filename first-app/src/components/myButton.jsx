import React from 'react'

const MyButton = ({count , handleClick}) => {
  return (
    <button
        style={{
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Count:{count}
      </button>
  )
}

export default MyButton