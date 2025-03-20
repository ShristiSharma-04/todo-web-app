import React, { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]); 
  const [todoCount, setTodoCount] = useState(1);
  const [tasks, setTasks] = useState([]); 
  const [isTaskRunning, setIsTaskRunning] = useState(false);

  const addTodo = (delay = 0) => {
    const currentTodoCount = todoCount;
    const newId = Date.now(); 
    setTodos((prev) => [
      ...prev,
      { id: newId, text: "Loading...", number: currentTodoCount, isLoading: true },
    ]);
   
    const taskFunc = () => {
      return new Promise((resolve) => {
        console.log(`Operation ${currentTodoCount} started`);
        setIsTaskRunning(true); 

        setTimeout(() => {
          setTodos((prev) =>
            prev.map((todo) =>
              todo.id === newId
                ? {
                    ...todo,
                    text: `Todo Item - ${currentTodoCount}`,
                    isLoading: false,
                  }
                : todo
            )
          );
          console.log(`Operation ${currentTodoCount} completed`);
          setTimeout(() => {
            resolve();
          }, ); 
        }, delay);
      });
    };

    setTasks((prev) => [...prev, taskFunc]); 
    setTodoCount((prev) => prev + 1);
  };

  useEffect(() => {
    const executeTask = async () => {
      if (!isTaskRunning && tasks.length > 0) {
        const currentTask = tasks[0];
        if (currentTask) {
          await currentTask(); 
          setTasks((prev) => prev.slice(1)); 
          setIsTaskRunning(false); 
        }
      }
    };
    executeTask();
  }, [tasks, isTaskRunning]);

  return (
    <div className="flex flex-row h-screen p-4 bg-gray-100">
      {/* Left side */}
      <div className="w-1/2 flex-1 bg-white shadow p-4 rounded-lg overflow-auto">
        <h2 className="text-xl font-semibold mb-2">Todo List</h2>
        <div className="space-y-2 max-h-[80vh] overflow-auto">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`p-2 border rounded shadow-sm ${
                todo.isLoading ? "bg-pink-100" : "bg-blue-500 text-white"
              }`}
            >
              {todo.text}
            </div>
          ))}
        </div>
      </div>
      {/* Right side */}
      <div className="w-1/2 ml-4 flex flex-col justify-center space-y-2 md:mb-3">
        <button
          onClick={() => addTodo(1000)}
          className="p-2 bg-gray-50 text-black rounded-lg shadow border-2 w-1/2"
        >
          Add Todo
        </button>
        <button
          onClick={() => addTodo(2000)}
          className="p-2 bg-gray-50 text-black rounded-lg shadow border-2 w-1/2"
        >
          Add After 2s
        </button>
        <button
          onClick={() => addTodo(5000)}
          className="p-2 bg-gray-50 text-black rounded-lg shadow border-2 w-1/2"
        >
          Add After 5s
        </button>
      </div>
    </div>
  );
};

export default App;
