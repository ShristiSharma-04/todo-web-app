import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="space-y-2 max-h-[80vh] overflow-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;
