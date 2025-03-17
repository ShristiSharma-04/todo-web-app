import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [pendingDelay, setPendingDelay] = useState(0);
  const [todoCount, setTodoCount] = useState(1);

  const addTodo = (delay = 0) => {
    const currentCount = todoCount;
    setTodos((prev) => [...prev, { id:currentCount, text: "Loading..." }]);

    const newDelay = pendingDelay + delay;
    setPendingDelay(newDelay);

    setTimeout(() => {

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === currentCount ? { currentCount, text: `Todo Item - ${currentCount}` } : todo
        )
      );
      setPendingDelay((current) =>
        current === newDelay ? 0 : current - delay
      );
    }, newDelay);

    setTodoCount(prev => prev += 1);
  };

  return (
    <div className="flex flex-row h-screen p-4 bg-gray-100">
      {/* Left side  */}
      <div className="w-1/2 flex-1 bg-white shadow p-4 rounded-lg overflow-auto">
        <h2 className="text-xl font-semibold mb-2">Todo List</h2>
        <div className="space-y-2 max-h-[80vh] overflow-auto">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="p-2 border rounded bg-blue-500 shadow-sm"
            >
              {todo.text}
            </div>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 ml-4 flex flex-col justify-center space-y-2 md:mb-3">
        <button
          onClick={() => addTodo(0)}
          className=" p-2 bg-gray-50 text-black rounded-lg shadow border-2 w-1/2"
        >
          Add Todo
        </button>
        <button
          onClick={() => addTodo(2000)}
          className="p-2 bg-gray-50 text-black  rounded-lg shadow border-2 w-1/2"
        >
          Add After 2s
        </button>
        <button
          onClick={() => addTodo(5000)}
          className="p-2 bg-gray-50 text-black  rounded-lg shadow border-2 w-1/2"
        >
          Add After 5s
        </button>
      </div>
    </div>
  );
};

export default App;
