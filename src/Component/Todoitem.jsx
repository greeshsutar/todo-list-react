import { useState } from 'react'

export const Todoitem = ({item,deletefn,toggleTodo,editTodo}) => {

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(item.task);

  return (
    <div>
   <input type="checkbox" 
   checked={item.completed}
   onChange={toggleTodo(item.id)} />
{
    editing?(
        <>
          <input 
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <button onClick={() => {
            editTodo(item.id, editText);
            setEditing(false);
          }}>
            Save
          </button>
        </>
    ):(
     <>
          <p>{item.text}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
        
    )
}

        <button onClick={()=>deletefn(item.id)}>🗑️</button>
    </div>
  )
}
