import { useState } from "react";

export const Todoitem = ({ item, deleteTodo, editTodo, toggleTodo }) => {

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  return (
    <div className="flex items-center justify-between bg-gray-50 p-2 rounded mt-2">

      <div className="flex items-center gap-2 flex-1">

        <input 
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleTodo(item.id)}
        />

        {editing ? (
          <input 
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border p-1 rounded w-full"
          />
        ) : (
          <p className={`flex-1 ${item.completed ? "line-through text-gray-400" : ""}`}>
            {item.text}
          </p>
        )}
      </div>

      <div className="flex gap-2 ml-2">

        {editing ? (
          <button 
            onClick={() => {
              editTodo(item.id, editText);
              setEditing(false);
            }}
            className="bg-green-500 text-white px-2 rounded"
          >
            Save
          </button>
        ) : (
          <button 
            onClick={() => setEditing(true)}
            className="bg-yellow-400 px-2 rounded"
          >
            Edit
          </button>
        )}

        <button 
          onClick={() => deleteTodo(item.id)}
          className="bg-red-500 text-white px-2 rounded"
        >
          Delete
        </button>

      </div>
    </div>
  );
};