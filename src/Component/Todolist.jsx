import { Todoitem } from "./Todoitem";

export const Todolist = ({ todos, deleteTodo, editTodo, toggleTodo }) => {
  return (
    <div className="mt-4">
      {todos.map(item => (
        <Todoitem
          key={item.id}
          item={item}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};